"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Surface the accordion sits on. */
  tone?: "ink" | "paper";
  className?: string;
}

/** Accessible FAQ disclosure list. One open at a time, keyboard operable. */
export function Accordion({ items, tone = "paper", className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  const dark = tone === "ink";

  return (
    <div className={cn("divide-y", dark ? "divide-white/10" : "divide-mist", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={index}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-5 text-left text-h3 text-[1.05rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
                  dark ? "text-mist hover:text-white" : "text-ink hover:text-brass-dim",
                )}
              >
                <span className="font-display">{item.question}</span>
                <ChevronDown
                  size={20}
                  aria-hidden
                  className={cn(
                    "shrink-0 text-brass-dim transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className={cn("pb-5 pr-8 leading-body", dark ? "text-mist/80" : "text-graphite")}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
