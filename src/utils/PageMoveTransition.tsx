import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function PageMoveTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pageMove = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        className="page-move"
        variants={pageMove}
      >
        {children}
      </motion.div>
    </div>
  );
}
