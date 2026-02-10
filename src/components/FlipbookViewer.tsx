import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Download,
  X,
  BookOpen,
  Loader2,
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import { useIsMobile } from '@/hooks/use-mobile';
import type { Newsletter } from '@/data/newslettersData';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface FlipbookViewerProps {
  newsletter: Newsletter;
  onClose: () => void;
}

export const FlipbookViewer = ({ newsletter, onClose }: FlipbookViewerProps) => {
  const [pages, setPages] = useState<string[]>([]);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [flipDir, setFlipDir] = useState<'next' | 'prev'>('next');
  const [isFlipping, setIsFlipping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isSpread = !isMobile;
  const hasPdf = !!newsletter.pdfUrl;

  // Load PDF pages or fall back to cover image
  useEffect(() => {
    if (!hasPdf) {
      setPages([newsletter.coverImage]);
      setTotalPages(1);
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(newsletter.pdfUrl!).promise;
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
        // Fallback to cover
        setPages([newsletter.coverImage]);
        setTotalPages(1);
        setIsLoading(false);
      }
    };
    loadPdf();
    return () => { cancelled = true; };
  }, [newsletter.pdfUrl, newsletter.coverImage, hasPdf]);

  // Navigation
  const canGoNext = isSpread
    ? currentSpread + 2 < totalPages
    : currentSpread + 1 < totalPages;
  const canGoPrev = currentSpread > 0;

  const nextPage = useCallback(() => {
    if (!canGoNext || isFlipping) return;
    setFlipDir('next');
    setIsFlipping(true);
    setCurrentSpread(s => s + (isSpread ? 2 : 1));
    setTimeout(() => setIsFlipping(false), 600);
  }, [canGoNext, isSpread, isFlipping]);

  const prevPage = useCallback(() => {
    if (!canGoPrev || isFlipping) return;
    setFlipDir('prev');
    setIsFlipping(true);
    setCurrentSpread(s => Math.max(0, s - (isSpread ? 2 : 1)));
    setTimeout(() => setIsFlipping(false), 600);
  }, [canGoPrev, isSpread, isFlipping]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextPage, prevPage, onClose]);

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

  // Page info
  const leftPageIdx = currentSpread;
  const rightPageIdx = currentSpread + 1;
  const displayStart = leftPageIdx + 1;
  const displayEnd = isSpread && rightPageIdx < totalPages ? rightPageIdx + 1 : displayStart;

  // Animation variants
  const pageVariants = {
    enter: (dir: 'next' | 'prev') => ({
      opacity: 0,
      rotateY: dir === 'next' ? -15 : 15,
      scale: 0.96,
      filter: 'brightness(0.85)',
    }),
    center: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      filter: 'brightness(1)',
    },
    exit: (dir: 'next' | 'prev') => ({
      opacity: 0,
      rotateY: dir === 'next' ? 15 : -15,
      scale: 0.96,
      filter: 'brightness(0.85)',
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-foreground/95 backdrop-blur-sm"
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-foreground/80 border-b border-background/10">
          <div className="flex items-center gap-3 min-w-0">
            <BookOpen className="w-5 h-5 text-primary-foreground shrink-0" />
            <div className="min-w-0">
              <h3 className="text-sm md:text-base font-semibold text-primary-foreground truncate">
                {newsletter.title}
              </h3>
              <p className="text-xs text-primary-foreground/60">{newsletter.date}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Viewer */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative px-4 py-6">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3 text-primary-foreground/70">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="text-sm">Loading newsletter...</span>
            </div>
          ) : (
            <>
              {/* Left arrow */}
              <button
                onClick={prevPage}
                disabled={!canGoPrev || isFlipping}
                className="absolute left-2 md:left-6 z-10 p-2 md:p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Book */}
              <div
                className="flex items-center justify-center"
                style={{
                  perspective: '1200px',
                  transform: `scale(${zoom})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.3s ease',
                }}
              >
                <AnimatePresence mode="wait" custom={flipDir}>
                  <motion.div
                    key={currentSpread}
                    custom={flipDir}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                      opacity: { duration: 0.35 },
                    }}
                    className={`flex ${isSpread ? 'flex-row' : 'flex-col'} rounded-lg overflow-hidden`}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.4), 0 2px 12px -4px rgba(0,0,0,0.2)',
                    }}
                  >
                    {/* Left page */}
                    {pages[leftPageIdx] && (
                      <div className="relative bg-background">
                        <img
                          src={pages[leftPageIdx]}
                          alt={`Page ${leftPageIdx + 1}`}
                          className="max-h-[75vh] w-auto object-contain select-none"
                          draggable={false}
                        />
                        {isSpread && (
                          <>
                            <div className="absolute inset-y-0 right-0 w-px bg-foreground/10" />
                            <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
                          </>
                        )}
                      </div>
                    )}

                    {/* Right page */}
                    {isSpread && pages[rightPageIdx] && (
                      <div className="relative bg-background">
                        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10" />
                        <img
                          src={pages[rightPageIdx]}
                          alt={`Page ${rightPageIdx + 1}`}
                          className="max-h-[75vh] w-auto object-contain select-none"
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
                disabled={!canGoNext || isFlipping}
                className="absolute right-2 md:right-6 z-10 p-2 md:p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-foreground/80 border-t border-background/10">
          <span className="text-xs md:text-sm text-primary-foreground/70 font-medium">
            {isLoading
              ? 'Loading...'
              : displayStart === displayEnd
                ? `Page ${displayStart} of ${totalPages}`
                : `Pages ${displayStart}–${displayEnd} of ${totalPages}`}
          </span>

          <div className="flex items-center gap-1 md:gap-2">
            <button onClick={zoomOut} className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors" title="Zoom Out">
              <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <span className="text-xs text-primary-foreground/50 min-w-[3rem] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button onClick={zoomIn} className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors" title="Zoom In">
              <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="w-px h-5 bg-primary-foreground/20 mx-1 md:mx-2" />

            <button onClick={toggleFullscreen} className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors" title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
              {isFullscreen ? <Minimize2 className="w-4 h-4 md:w-5 md:h-5" /> : <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />}
            </button>

            {newsletter.pdfUrl && (
              <a
                href={newsletter.pdfUrl}
                download
                className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors"
                title="Download PDF"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
