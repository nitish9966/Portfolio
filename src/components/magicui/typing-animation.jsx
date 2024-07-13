"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function TypingAnimation({
  text,
  typingSpeed = 200,
  deletingSpeed = 100,
  delay = 1000,
  className
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing effect
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting effect
        if (index > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setIndex(index - 1);
        } else {
          // Pause before starting to type again
          setTimeout(() => setIsDeleting(false), delay);
        }
      }
    };

    const typingEffect = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      clearInterval(typingEffect);
    };
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={cn(className)}>
      {displayedText}
    </span>
  );
}
