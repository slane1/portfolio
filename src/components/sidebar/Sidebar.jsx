import "./sidebar.scss";
import Links from "./links/Links";
import Toggle from "./toggle/Toggle";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
    open: { 
        clipPath: "circle(1200px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition:{
            type: "spring",
            delay: 0.5,
            stiffness: 400,
            damping: 40,
        },
    },
};

export default function Sidebar() {
    const [open, setOpen] = useState(false)

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <Toggle setOpen={setOpen}/>
        </motion.div>
    )
}