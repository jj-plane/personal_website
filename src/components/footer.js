import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import gsap from "gsap"
import "../styles/footer.scss"

class footer extends React.Component{
    render(){
        const iconSize = 45;
        return(
            <footer>
                <div className="footerContainer">
                    <p>Made With: </p>
                    <StaticImage 
                        src="../images/gatsby_monogram.png"
                        height={iconSize}
                        width={iconSize}
                    /> 
                    <StaticImage 
                        src="../images/netlify_logo.png"
                        height={iconSize}
                        width={iconSize}
                    />
                    <span className="emoji">☕</span>
                </div>
            </footer>
        )
    }
}

export default footer