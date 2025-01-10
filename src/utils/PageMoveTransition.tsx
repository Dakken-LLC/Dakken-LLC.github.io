import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { tr } from "framer-motion/client";

function PageMoveTransition({ children }: { children: ReactNode }) {
  const PageMove = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
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
