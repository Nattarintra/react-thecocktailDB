import { useEffect, useRef } from "react";

import { Navbar } from "./Navbar";
import { Button } from "./Button";

interface IMenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isOpen, onClose }: IMenuMobileProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  // Simple initial focus
  useEffect(() => {
    if (isOpen) panelRef.current?.focus();
  }, [isOpen]);

  // Don’t render in DOM when closed
  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" aria-hidden="false" onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className="drawer"
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking panel
      >
        <div className="drawer-header">
          <Button variant="close" onClick={onClose} />
        </div>
        <Navbar onClick={onClose} />
      </aside>
    </div>
  );
};
