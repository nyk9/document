"use client";

import { useState } from "react";
import styles from "./tooltip.module.css";

export default function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <span
      className={styles.tooltipContainer}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      tabIndex={0}
      role="button"
      aria-describedby="tooltip-text"
    >
      <span className={styles.children}>{children}</span>
      {isVisible && (
        <span className={styles.tooltip} id="tooltip-text">
          {text}
        </span>
      )}
    </span>
  );
}
