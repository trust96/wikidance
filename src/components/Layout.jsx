import React from 'react'
import Footer from './Footer'
import Nav from './navigation/Nav'

export default function Layout({children}) {
    return (
        <>
        <Nav/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}
