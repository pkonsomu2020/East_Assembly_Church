import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pastors from './pages/Pastors'
import ImNew from './pages/ImNew'
import Ministries from './pages/Ministries'
import DiscipleshipMinistry from './pages/DiscipleshipMinistry'
import MarriageCareMinistry from './pages/MarriageCareMinistry'
import YouthMinistry from './pages/YouthMinistry'
import MusicMinistry from './pages/MusicMinistry'
import TeensMinistry from './pages/TeensMinistry'
import ChildrenMinistry from './pages/ChildrenMinistry'
import ChaplaincyMinistry from './pages/ChaplaincyMinistry'
import HomeCareMinistry from './pages/HomeCareMinistry'
import MensMinistry from './pages/MensMinistry'
import PrayerMinistry from './pages/PrayerMinistry'
import WomensMinistry from './pages/WomensMinistry'
import HospitalityMinistry from './pages/HospitalityMinistry'
import MediaMinistry from './pages/MediaMinistry'
import LiveStream from './pages/LiveStream'
import Give from './pages/Give'
import Contact from './pages/Contact'
import Events from './pages/Events'

/** Scroll back to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pastors" element={<Pastors />} />
        <Route path="/im-new" element={<ImNew />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/ministries/discipleship-ministry" element={<DiscipleshipMinistry />} />
        <Route path="/ministries/marriage-care-ministry" element={<MarriageCareMinistry />} />
        <Route path="/ministries/youth-ministry" element={<YouthMinistry />} />
        <Route path="/ministries/music-ministry" element={<MusicMinistry />} />
        <Route path="/ministries/teens-ministry" element={<TeensMinistry />} />
        <Route path="/ministries/childrens-ministry" element={<ChildrenMinistry />} />
        <Route path="/ministries/chaplaincy-ministry" element={<ChaplaincyMinistry />} />
        <Route path="/ministries/home-care-ministry" element={<HomeCareMinistry />} />
        <Route path="/ministries/mens-young-mens-ministry" element={<MensMinistry />} />
        <Route path="/ministries/prayer-intercessory-ministry" element={<PrayerMinistry />} />
        <Route path="/ministries/womens-ministry" element={<WomensMinistry />} />
        <Route path="/ministries/hospitality-welcome-ministry" element={<HospitalityMinistry />} />
        <Route path="/ministries/media-communication-ministry" element={<MediaMinistry />} />
        <Route path="/live" element={<LiveStream />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  )
}
