import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
                        alt="gatsby logo"
                    /> 
                    <StaticImage 
                        src="../images/netlify_logo.png"
                        height={iconSize}
                        width={iconSize}
                        alt="netlify logo"
                    />
                    <span className="emoji">☕</span>
                </div>
            </footer>
        )
    }
}

export default footer