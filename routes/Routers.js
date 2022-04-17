

import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Partners from '../components/Partners'
import Roadmap from '../components/Roadmap'
import FAQ from '../components/FAQ'
import CommunityRules from '../pages/company/CommunityRules'
import PrivacyPolicy from '../pages/company/PrivacyPolicy'
import TermsOfUse from '../pages/company/TermsOfUse'
import ContactSupport from '../pages/support/ContactSupport'
import Opensea from '../pages/NFT/Opensea'
import Learn from '../pages/NFT/Learn'
import Discord from '../pages/Socials/Discord'
import Instagram from '../pages/socials/Instagram'
import Telegram from '../pages/Socials/Telegram'
import Twitter from '../pages/Socials/Twitter'

export const Routers = () => {
  return <Routers>
      <Route path='/' element={<Navigate to ='/home' />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/partners' element={<Partners/>} />
      <Route path='/roadmap' element={<Roadmap/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/community-rules' element={<CommunityRules/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
      <Route path='/term-of-use' element={<TermsOfUse/>} />
      <Route path='/contact-support' element={<ContactSupport/>} />
      <Route path='/learn' element={<Learn/>} />
  </Routers>
}

export default Routers