import React from 'react'
import Logo from "../images/logo_without_bg.png"

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Iganza-roy"><img src={Logo} alt="logo" /></a>
      <span className='copyright'>@Roy Kibata - 2024</span>
      <span className='slogan'>Snippets of Stories and Insights &#128218;</span>
    </footer>
  )
}

export default Footer
