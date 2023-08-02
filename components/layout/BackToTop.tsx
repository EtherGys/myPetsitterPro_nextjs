import React from 'react'
import Image from 'next/image'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const backToTop = () => {
  return (
    <button
        type="button"
        className="btn btn-secondary btn-floating"
        id="btn-back-to-top"
        >
  <Image
              src={BsFillArrowUpCircleFill}
              alt="arrow Logo"
              width={40}
              height={40}
            />
</button>
  )
}

export default backToTop
