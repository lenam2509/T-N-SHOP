import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layouts = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layouts