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
} from 'lucide-react';
import type { Newsletter } from '@/data/newslettersData';

interface FlipbookViewerProps {
  newsletter: Newsletter;
  onClose: () => void;
}

export const FlipbookViewer = ({ newsletter, onClose }: FlipbookViewerProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right'>('right');
  const containerRef = useRef<HTMLDivElement>(null);

  // For now we display cover image as the main page.
  // When PDFs are provided, pages will be rendered here.
  const pages = [newsletter.coverImage];
  const totalPages = pages.length;

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
          {/* Left arrow */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-2 md:left-6 z-10 p-2 md:p-3 rounded-full bg-background/20 text-primary-foreground hover:bg-background/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Book */}
          <div
            className="relative perspective-[2000px]"
            style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }}
          >
            <div className="relative bg-background rounded-lg shadow-2xl overflow-hidden max-w-[90vw] max-h-[75vh]">
              {/* Book spine shadow */}
              <div className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-r from-foreground/10 via-foreground/20 to-foreground/10 z-10 pointer-events-none hidden md:block" />

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
                <img
                  src={pages[currentPage]}
                  alt={`${newsletter.title} - Page ${currentPage + 1}`}
                  className="max-h-[75vh] w-auto object-contain mx-auto select-none"
                  draggable={false}
                />
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
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-foreground/80 border-t border-background/10">
          {/* Page info */}
          <span className="text-xs md:text-sm text-primary-foreground/70 font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>

          {/* Controls */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={zoomOut}
              className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <span className="text-xs text-primary-foreground/50 min-w-[3rem] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="w-px h-5 bg-primary-foreground/20 mx-1 md:mx-2" />

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-background/10 transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
              )}
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
