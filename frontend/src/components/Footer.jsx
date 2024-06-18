import React from 'react'
import Logo from "../images/logo_without_bg.png"

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span className='copyright'>@Roy Kibata - 2024</span>
      <span>Snippets of Stories and Insights &#128218;</span>
    </footer>
  )
}

export default Footer
