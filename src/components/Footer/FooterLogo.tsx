import logo from '../../assets/logo.svg'
import EllipseLogo from '../../assets/EllipseLogo.svg'
import logoline from '../../assets/logoline.svg'
import insta from '../../assets/inta.svg'
import './Footer.css'
import FooterNav from './FooterNav'
import FooterPrava from './FooterPrava'


const FooterLogo = () => {
    return (
        <>
            <footer className='footer'>
            <div className='footer_container'>
                <div>
                <div className='footer-logo'>
                    <img src={logoline} alt="" className='footer_line' />
                    <img src={EllipseLogo} alt="" />
                    <img src={logo} alt="" className='footer_logo' />
                </div>
                <h2 className='phone-number'>8-961-525-91-91</h2>
                <div className='footer__info'>
                    <div className='footer_time'>
                        <span className=''>Время работы:</span>
                        <span>с 10:00 до 19:00</span>
                    </div>
                    <div className='footer_adres'>
                        <span>Адрес:</span>
                        <span>Краснодар,<br />
                            ул. Московская 144 корп. - 1</span>
                    </div>
                    <div className='footer_mail'>
                        <span>Почта:</span>
                        <span>mebelarko@mail.ru</span>
                    </div>
                    </div>
                    <div className='footer_contact'>
                        <span className='contact'>Мы в Инстаграме</span>
                        <img className='insta' src={insta} alt="" />
                    </div>
                </div>
                <FooterNav />
                </div>
                <FooterPrava />
            </footer>
        </>
    )
}

export default FooterLogo