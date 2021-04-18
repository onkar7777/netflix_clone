import React from 'react';
import logo from '../../assets/images/logo.png';
import avtar from '../../assets/images/avtar.png'
const Header = ({headerData})=> {
    return (
        <div className="">
            <header className="top_header" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${headerData.backdrop_path})`}} >
                
                <nav>
                    <img src={logo} className="logo pl-2" alt="net" />
                    <img src={avtar} className="avtar pr-2 mt-2" alt="avatr" />
                </nav>
                <div className="row header_details">
                   <div className="col-md-12">
                      <h1> {headerData.title} </h1>
                   </div>
                   <div className="col-md-12">
                        <button className="play_btn">Play</button>
                        <button className="my_list_btn">My List</button>
                   </div>
                   <div className="col-md-6 overview text-center">
                        <p> { headerData.overview } </p>
                   </div>
                </div>
            </header>
        </div>
    )
}

export default Header;