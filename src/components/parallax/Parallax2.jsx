import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

    const generateParticles = () => {
      const particles = [];
      for (let i = 0; i < 40; i++) {
          particles.push(
              <motion.div
                  key={i}
                  className="particle"
                  style={{
                      width: "4px",
                      height: "4px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      position: "absolute",
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: `${Math.random()}`,
                      scale: `${Math.random()}`,
                  }}
              ></motion.div>
          );
      }
      return particles;
    };

    return (
        <div
            className="flex"
            ref={ref}
            style={{
                background: "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: yText }}>
                Contact me via
            </motion.h1>
            <motion.h2 
            style={{ y: yText }}
            >
                contact@maeve.de
            </motion.h2>
            <motion.div className="mountains"></motion.div>
            {generateParticles()}
            <br />
        </div>
    );
}
