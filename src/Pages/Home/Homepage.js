import React from 'react'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
import UncontrolledExample from '../../Commponet/Home-Commponet/slide'
import HomeCatgory from '../../Commponet/Home-Commponet/HomeCatgory'
import Cardproudect from '../../Commponet/Home-Commponet/Cardproudect'
import DiscountSection from '../../Commponet/Home-Commponet/discountsection'
import Mostbrand from '../../Commponet/Home-Commponet/Mostbrand'
import Footer from '../../Commponet/Utility/Footer'
export default function Homepage() {
  return (
    <div>
      <Navbarcomponent/>
      <UncontrolledExample/>
      <HomeCatgory/>
      <Cardproudect nameofhead={"Top seller"}/>
      <DiscountSection/>
      <Cardproudect nameofhead={"Latest fashion"}/>
      <Mostbrand/>
      <Footer/>
    </div>
  )
}
