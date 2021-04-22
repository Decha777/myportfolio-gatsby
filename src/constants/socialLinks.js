import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaTelegram
} from "react-icons/fa"

const data = [

  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/gib-ash-3bab151a0/",
  },
  {
    id: 2,
    icon: <FaTelegram className="social-icon"></FaTelegram>,
    url: "https://t.me/Decha777",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Decha777",
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
