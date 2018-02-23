import React, { Component } from 'react';
import Footer from "./../components/Footer";
import Header from "./../components/Header/";
import Main from "./../components/Main";


class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />

            </div>
                
            
        );
    }
}

export default HomePage;