import logo from '../../assets/logo.svg'
import EllipseLogo from '../../assets/EllipseLogo.svg'
import logoline from '../../assets/logoline.svg'
import insta from '../../assets/inta.svg'
import './Footer.css'
import FooterNav from './FooterNav'
import FooterPrava from './FooterPrava'
import { cn } from '../../utils/bem-config'


const FooterLogo = () => {
    const footer = cn("footer")
    return (
        <>
            <footer className={footer()}>
                <div className={footer("container")}>
                    <div>
                        <div className='footer-logo'>
                            <img src={logoline} alt="" className='footer_line' />
                            <img src={EllipseLogo} alt="" />
                            <img src={logo} alt="" className='footer_logo' />
                        </div>
                        <h2 className='phone-number'>8-961-525-91-91</h2>
                        <div className='footer__info'>
                            <div className='footer_time'>
                                <span className='footer-left'>Время работы:</span>
                                <span className='footer-right'>с 10:00 до 19:00</span>
                            </div>
                            <div className='footer_adres'>
                                <span className='footer-left'>Адрес:</span>
                                <span className='footer-right'>Краснодар,<br />
                                    ул. Московская 144 корп. - 1</span>
                            </div>
                            <div className='footer_mail'>
                                <span className='footer-left'>Почта:</span>
                                <span className='footer-right'>mebelarko@mail.ru</span>
                            </div>
                        </div>
                        <div className='footer_contact'>
                            <span className='contact'>Мы в Инстаграме</span>
                            <img className='insta' src={insta} alt="" />
                        </div>
                        <FooterPrava />
                    </div>
                    <FooterNav />
                    
                </div>
                
            </footer>
        </>
    )
}

export default FooterLogo