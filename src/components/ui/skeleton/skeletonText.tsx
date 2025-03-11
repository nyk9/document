import React from "react";
import styles from "./skeletonText.module.css";

interface SkeletonTextProps {
  width?: string;
  height?: string;
  lines?: number;
}

const SkeletonText = ({
  width = "100%",
  height = "1.2rem",
  lines = 1,
}: SkeletonTextProps) => {
  return (
    <>
      {[...Array(lines)].map((_, index) => (
        <div
          key={index}
          className={styles.skeleton}
          style={{
            width: typeof width === "string" ? width : `${width}%`,
            height,
          }}
        />
      ))}
    </>
  );
};

export default SkeletonText;
