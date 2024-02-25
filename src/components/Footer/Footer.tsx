import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import mail from '../../assets/mail.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Made with ❤️ by <span>Pureshwar Gonekar</span>
          using<img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media"><a
        href="https://www.linkedin.com/in/pureshwar-gonekar-358b661aa/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
        </a>
          <a
            href="https://github.com/PureshwarGonekar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="mailto:pureshwargonekar7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="telegram" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B919770809324&text=Hello+Pureshwar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a
            href="mailto:pureshwargonekar7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            href="https://www.instagram.com/pureshwar_gonekar/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="telegram" />
          </a>
      </div>
    </Container>
  )
}
