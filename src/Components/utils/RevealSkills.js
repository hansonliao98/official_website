import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface Props{
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
export const RevealButton1 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton2 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton3 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton4 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton5 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton6 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton7 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton8 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton9 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const RevealButton10 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};