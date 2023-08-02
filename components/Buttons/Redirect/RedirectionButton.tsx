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

  return (
    // <div className="btnFlexPosition text-center col col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <a href={href}>
    <button type="button" className={classes.btnLight}>
      <Image src={src} width={120} height={120} alt={alt}/>
      {/* <Image src={src} width={1200} height={500} alt="Petsitter et animal" /> */}

    {/* <p><img src="{{asset('build/images/logo/icone_maitre.png')}}" alt="image de patte de chien" title="Maitre"></p> */}
    <h2>{text}</h2>
    <h3>{subtitle}</h3>
    </button>
    </a>
    // </div>
    )
  }
  
  export default RedirectionButton
  