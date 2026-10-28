"use client";

import { useEffect, useState } from "react";
import { useContent } from "./ContentProvider";
import { ArrowUpIcon } from "./icons";

const toTop = (behavior: ScrollBehavior) => window.scrollTo({ top: 0, left: 0, behavior });

/**
 * Every visit starts at the top of the page: the browser's own scroll restoration and a
 * leftover #section in a shared link would otherwise open the page part-way down.
 * Also shows a floating "back to top" button once the visitor has scrolled down.
 */
export default function ScrollControls() {
  const { ui } = useContent();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
    // The page scrolls smoothly by default; jump instead, and again once images have loaded,
    // in case the browser was still heading for the old #section.
    const html = document.documentElement;
    // Never pull someone back up once they have started scrolling themselves.
    let touched = false;
    const mark = () => (touched = true);
    const userEvents = ["wheel", "touchstart", "keydown", "mousedown"] as const;
    userEvents.forEach((ev) => window.addEventListener(ev, mark, { passive: true, once: true }));
    const reset = () => {
      if (touched) return;
      html.style.scrollBehavior = "auto";
      toTop("instant");
      requestAnimationFrame(() => (html.style.scrollBehavior = ""));
    };
    reset();
    const t = window.setTimeout(reset, 150);
    const onLoad = () => reset();
    if (document.readyState !== "complete") window.addEventListener("load", onLoad, { once: true });
    // Coming back with the browser's back button can restore the old page from cache.
    const onShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      touched = false;
      reset();
    };
    window.addEventListener("pageshow", onShow);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("pageshow", onShow);
      userEvents.forEach((ev) => window.removeEventListener(ev, mark));
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={ui.backToTop}
      title={ui.backToTop}
      onClick={() => toTop(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth")}
      className={`fixed bottom-[88px] right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary-700 text-white shadow-[0_8px_20px_rgba(0,90,72,.35)] ring-2 ring-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-900 md:bottom-6 md:right-6 ${
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
