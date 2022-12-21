import {React,useState} from 'react'
import Header from '../../component/header'
import HomeSlider from '../../component/home-slider'
import HomeInfo from '../../component/home-info'
import HomeWork from '../../component/home-work'
import HomeContact from '../../component/home-contact'
import Footer from '../../component/footer'
import ContactPopup from '../../component/contact-popup'

function Home() {
  const [popup, setPopup] = useState(false);

  const popupActiveStatus = () => {
    setPopup(true)
  }
  const popupPassiveStatus = () => {
    setPopup(false)
  }


  return (
    <>
      <Header />
      <HomeSlider />
      <HomeInfo />
      <HomeWork />
      <HomeContact popupActiveClick={popupActiveStatus}  />
      <Footer />
      {popup && <ContactPopup contactText="Contact Us" popupPassiveClick={popupPassiveStatus}/>}
    </>
  )
}

export default Home