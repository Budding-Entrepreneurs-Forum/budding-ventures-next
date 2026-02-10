import { useState, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SkeletonImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Extra classes for the skeleton placeholder */
  skeletonClassName?: string;
  /** Extra classes for the outer wrapper div */
  wrapperClassName?: string;
}

/**
 * An image component that shows a shimmer skeleton until the image loads,
 * then fades in the actual image smoothly.
 */
export const SkeletonImage = ({
  className,
  skeletonClassName,
  wrapperClassName,
  alt,
  ...props
}: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {/* Skeleton shimmer */}
      {!loaded && (
        <div
          className={cn(
            'absolute inset-0 bg-muted animate-pulse',
            skeletonClassName
          )}
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-background/40 to-transparent" />
        </div>
      )}

      {/* Actual image */}
      <img
        {...props}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          props.onLoad?.(e);
        }}
        className={cn(
          'transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </div>
  );
};
