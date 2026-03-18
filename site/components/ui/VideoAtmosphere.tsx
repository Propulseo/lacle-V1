'use client';

import { useRef, useEffect } from 'react';

type VideoAtmosphereProps = {
  src?: string;
  poster?: string;
  alt: string;
};

export function VideoAtmosphere({ src, poster, alt }: VideoAtmosphereProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [src]);

  if (!src) {
    return (
      <div className="relative aspect-video bg-ivory-warm border border-border flex items-center justify-center max-w-[680px]">
        <span className="text-[length:var(--text-caption)] text-graphite-light tracking-[0.03em]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className="aspect-video w-full max-w-[680px] bg-ivory-warm border border-border object-cover"
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
