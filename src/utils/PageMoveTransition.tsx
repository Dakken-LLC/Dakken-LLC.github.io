import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { tr } from "framer-motion/client";

function PageMoveTransition({ children }: { children: ReactNode }) {
  const PageMove = {
    initial: {
      opacity: 0,
      y: 50, // 初期位置を画面の下に設定
    },
    animate: {
      opacity: 1,
      y: 0, // 最終位置を画面の中央に設定
    },
  };

  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        className="page-move"
        variants={PageMove}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageMoveTransition;
