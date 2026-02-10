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
  X,
  BookOpen,
  Loader2,
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Set worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface PdfFlipbookProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export const PdfFlipbook = ({ pdfUrl, title, onClose }: PdfFlipbookProps) => {
  const [pages, setPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right'>('right');
  const containerRef = useRef<HTMLDivElement>(null);

  // Render PDF pages to canvas images
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
          const scale = 2; // high-res rendering
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

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection('right');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
        setIsFlipping(false);
      }, 400);
    }
  }, [currentPage, totalPages, isFlipping]);

  const prevPage = useCallback(() => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('left');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((p) => Math.max(p - 1, 0));
        setIsFlipping(false);
      }, 400);
    }
  }, [currentPage, isFlipping]);

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextPage, prevPage, onClose]);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));

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
                {title}
              </h3>
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
            <div className="flex flex-col items-center gap-4 text-primary-foreground">
              <Loader2 className="w-10 h-10 animate-spin" />
              <span className="text-sm">Loading report...</span>
            </div>
          ) : (
            <>
              {/* Left arrow */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="absolute left-2 md:left-6 z-10 p-2 md:p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Page */}
              <div
                className="relative"
                style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }}
              >
                <div className="relative bg-background rounded-lg shadow-2xl overflow-hidden max-w-[90vw] max-h-[75vh]">
                  <motion.div
                    key={currentPage}
                    initial={{
                      rotateY: flipDirection === 'right' ? 15 : -15,
                      opacity: 0.7,
                    }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="origin-left"
                  >
                    {pages[currentPage] && (
                      <img
                        src={pages[currentPage]}
                        alt={`Page ${currentPage + 1}`}
                        className="max-h-[75vh] w-auto object-contain mx-auto select-none"
                        draggable={false}
                      />
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Right arrow */}
              <button
                onClick={nextPage}
                disabled={currentPage >= totalPages - 1}
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
            Page {currentPage + 1} of {totalPages || '...'}
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

            <a
              href={pdfUrl}
              download
              className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors"
              title="Download PDF"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
