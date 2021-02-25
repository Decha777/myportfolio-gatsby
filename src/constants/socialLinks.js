import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaCodepen,
  FaInstagramSquare,
  FaTelegram
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaTelegram className="social-icon"></FaTelegram>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaCodepen className="social-icon"></FaCodepen>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
