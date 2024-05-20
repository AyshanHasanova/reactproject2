import React, { Fragment } from 'react'
import Footer from '../../layout/site/Footer/Footer'
import { Outlet } from 'react-router'
import Header from '../../layout/site/Header/Header'


const SiteRoot = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default SiteRoot