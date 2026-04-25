"use client";
import { useEffect } from "react";

export default function AnimationProvider() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Initial observation
    const observeElements = () => {
      const fadeUpElements = document.querySelectorAll(".fade-up:not(.visible)");
      fadeUpElements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Observe for new elements being added to the DOM (e.g. during filtering)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          observeElements();
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
