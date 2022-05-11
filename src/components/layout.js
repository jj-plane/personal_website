import React, { useEffect, useRef } from 'react'
import Header from './header'
import Footer from './footer'
import useLocalStorage from "use-local-storage"
import '../styles/main.scss'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function Layout({children}){

    let defaultDark;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    
    useEffect(() => {
        defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
    })
    const themeIcon = React.useRef();
    const lowerThemeIcon = (e) => {
        e.preventDefault();
        gsap.to(themeIcon.current, {y:28, opacity:0, duration:.25, onComplete: switchTheme});
    }
    const raiseThemeIcon = () => {
        gsap.fromTo(themeIcon.current, {y:28, opacity:0}, {y:0, opacity:1, duration:.25})
    }

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      raiseThemeIcon();  
    }
    return(
        <div data-theme={theme} className="layout">
            <Header changeTheme={lowerThemeIcon} theme={theme} themeRef={themeIcon}></Header>
            <main>
                <div className='wrapper'>
                    <motion.main
                        initial={{ opacity: 0, y: 65 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -65 }}
                        transition={{
                            type: "spring",
                            mass: 0.35,
                            stiffness: 75,
                            duration: 0.3
                        }}>
                        {children}
                    </motion.main>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}