import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRegisterButtonStyles } from './RedirectButton.styles'

interface props {
  text: string;
  subtitle: string;
  href: string;
  src: StaticImageData;
  alt: string;
}

export function RedirectionButton({text, subtitle, src, href, alt}: props) {
  const { classes } = useRegisterButtonStyles();
  const goToPage = () => {
    location.href = href
  }
  return (
    // <div className="btnFlexPosition text-center col col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <button type="button" onClick={goToPage} className={classes.btnLight}>
      <a href={href} className={classes.links}>

    <Image src={src} width={120} height={120} alt={alt}/>
    <h2>{text}</h2>
    <h3>{subtitle}</h3>
      </a>
    </button>
    // </div>
    )
  }
  
  export default RedirectionButton
  