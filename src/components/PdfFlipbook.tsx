import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Download,
  BookOpen,
  Loader2,
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import { useIsMobile } from '@/hooks/use-mobile';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface PdfFlipbookProps {
  pdfUrl: string;
  title?: string;
}

export const PdfFlipbook = ({ pdfUrl, title }: PdfFlipbookProps) => {
  const [pages, setPages] = useState<string[]>([]);
  const [currentSpread, setCurrentSpread] = useState(0); // index of left page in spread
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [flipDir, setFlipDir] = useState<'next' | 'prev'>('next');
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // In spread mode (desktop), we show 2 pages at a time
  // In single mode (mobile), we show 1 page at a time
  const isSpread = !isMobile;

  // Load PDF pages
  useEffect(() => {
    let cancelled = false;
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        if (cancelled) return;
        setTotalPages(pdf.numPages);
        const rendered: string[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const scale = 2;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d')!;
          await page.render({ canvasContext: ctx, viewport }).promise;
          rendered.push(canvas.toDataURL('image/jpeg', 0.85));
          if (cancelled) return;
        }
        setPages(rendered);
        setIsLoading(false);
      } catch (err) {
        console.error('PDF load error:', err);
        setIsLoading(false);
      }
    };
    loadPdf();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  // Current page index (for display)
  const currentPage = currentSpread;

  // Navigation
  const canGoNext = isSpread
    ? currentSpread + 2 < totalPages
    : currentSpread + 1 < totalPages;

  const canGoPrev = currentSpread > 0;

  const nextPage = useCallback(() => {
    if (!canGoNext) return;
    setFlipDir('next');
    setCurrentSpread(s => s + (isSpread ? 2 : 1));
  }, [canGoNext, isSpread]);

  const prevPage = useCallback(() => {
    if (!canGoPrev) return;
    setFlipDir('prev');
    setCurrentSpread(s => Math.max(0, s - (isSpread ? 2 : 1)));
  }, [canGoPrev, isSpread]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextPage, prevPage]);

  // Fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else if (document.fullscreenElement) {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFSChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFSChange);
    return () => document.removeEventListener('fullscreenchange', onFSChange);
  }, []);

  const zoomIn = () => setZoom(z => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom(z => Math.max(z - 0.25, 0.5));

  // Page display info
  const leftPageIdx = currentSpread;
  const rightPageIdx = currentSpread + 1;
  const displayStart = leftPageIdx + 1;
  const displayEnd = isSpread && rightPageIdx < totalPages ? rightPageIdx + 1 : displayStart;

  // Flip animation variants
  const flipVariants = {
    enter: (dir: 'next' | 'prev') => ({
      rotateY: dir === 'next' ? -90 : 90,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (dir: 'next' | 'prev') => ({
      rotateY: dir === 'next' ? 90 : -90,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-2xl overflow-hidden border border-border bg-card ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-4 h-4 text-primary shrink-0" />
          {title && (
            <span className="text-sm font-semibold text-foreground truncate">{title}</span>
          )}
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {isLoading
            ? 'Loading...'
            : displayStart === displayEnd
              ? `Page ${displayStart} of ${totalPages}`
              : `Pages ${displayStart}–${displayEnd} of ${totalPages}`}
        </span>
      </div>

      {/* Book viewer */}
      <div className={`relative flex items-center justify-center bg-muted/30 overflow-hidden ${isFullscreen ? 'flex-1 h-[calc(100vh-7rem)]' : 'min-h-[300px] md:min-h-[500px]'}`}>
        {isLoading ? (
          <div className="flex flex-col items-center gap-3 text-muted-foreground py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="text-sm">Loading report...</span>
          </div>
        ) : (
          <>
            {/* Left arrow */}
            <button
              onClick={prevPage}
              disabled={!canGoPrev}
              className="absolute left-1 md:left-4 z-10 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-background transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pages */}
            <div
              className="flex items-center justify-center py-6 px-8 md:px-16"
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center', transition: 'transform 0.3s ease' }}
            >
              <AnimatePresence mode="wait" custom={flipDir}>
                <motion.div
                  key={currentSpread}
                  custom={flipDir}
                  variants={flipVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={`flex ${isSpread ? 'flex-row' : 'flex-col'} shadow-2xl rounded-lg overflow-hidden`}
                  style={{ perspective: 1200 }}
                >
                  {/* Left page (or single page on mobile) */}
                  {pages[leftPageIdx] && (
                    <div className="relative bg-background">
                      <img
                        src={pages[leftPageIdx]}
                        alt={`Page ${leftPageIdx + 1}`}
                        className={`${isFullscreen ? 'max-h-[calc(100vh-10rem)]' : 'max-h-[60vh] md:max-h-[65vh]'} w-auto object-contain select-none`}
                        draggable={false}
                      />
                      {isSpread && (
                        <div className="absolute inset-y-0 right-0 w-px bg-border" />
                      )}
                    </div>
                  )}

                  {/* Right page (spread mode only) */}
                  {isSpread && pages[rightPageIdx] && (
                    <div className="relative bg-background">
                      <img
                        src={pages[rightPageIdx]}
                        alt={`Page ${rightPageIdx + 1}`}
                        className={`${isFullscreen ? 'max-h-[calc(100vh-10rem)]' : 'max-h-[60vh] md:max-h-[65vh]'} w-auto object-contain select-none`}
                        draggable={false}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
              onClick={nextPage}
              disabled={!canGoNext}
              className="absolute right-1 md:right-4 z-10 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-background transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-muted/50 border-t border-border">
        <span className="text-xs text-muted-foreground font-medium">
          {Math.round(zoom * 100)}%
        </span>

        <div className="flex items-center gap-1">
          <button onClick={zoomOut} className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Zoom Out">
            <ZoomOut className="w-4 h-4" />
          </button>
          <button onClick={zoomIn} className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Zoom In">
            <ZoomIn className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-border mx-1" />
          <button onClick={toggleFullscreen} className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <a href={pdfUrl} download className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Download PDF">
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
