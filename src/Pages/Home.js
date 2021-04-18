import React, { useState } from 'react';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import MoviesRows from '../Component/MoviesRow/MovieRow';
import HeaderContext from '../Context/HeaderContext';
import { headerDaata } from '../Services/staticData';

const Home = () => {
    const [headerData, setHeaderData] = useState(headerDaata);
    return (
        <>
        <HeaderContext.Provider
            value={{headerData, setHeaderData}}
        >
            <Header headerData={headerData} />
            <MoviesRows title="Treanding" fetBaseUrl="treanding" />
            <MoviesRows title="Discover" fetBaseUrl="discover" />

        </HeaderContext.Provider>
       
        <Footer />
 
        </>
    )
}

export default Home;