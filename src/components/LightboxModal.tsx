"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types";

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none hidden sm:block"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 focus:outline-none hidden sm:block"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main image container */}
      <div className="relative max-w-5xl w-full h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center text-white space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl text-gold-300 font-semibold">
            {currentItem.title}
          </h3>
          <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto">
            {currentItem.caption}
          </p>
          <span className="text-[11px] text-gold-400/80 uppercase tracking-widest block pt-1">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}

