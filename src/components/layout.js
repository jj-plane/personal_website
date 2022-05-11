import React from 'react'
import Header from './header'
import Footer from './footer'
import useLocalStorage from "use-local-storage"
import '../styles/main.scss'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function Layout({children}){


    const defaultDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme:dark)').matches : false;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    return(
        <div className="layout" data-theme={theme}>
            <Header theme={theme} switcher={switchTheme}></Header>
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