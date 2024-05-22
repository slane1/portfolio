import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <div className="navbar">
           <Sidebar />
            <div className="wrapper">
                <motion.span initial={{opacitz:0, scale:0.5}} animate={{opacitz:1, scale:1}} transition={{duration:0.5}}>Stefan Lange</motion.span>
                <div className="social">
                    <a href="https://github.com/slane1"><img src="/github.svg " alt="Github" /></a>
                    <a href="https://linkedin.com/in/slane1"><img src="/linkedin.svg" alt="LinkedIn" /></a>
                </div>
            </div>
        </div>
    )
}