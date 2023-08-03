import React, { createContext, useState } from "react";
import SearchBox from "../components/SearchBox";
import HomeLine from "../components/HomeLine";
import SocialBox from "../components/SocialBox";
import UserMessageBox from "../components/UserMessageBox";
import BotMesssageBox from "../components/BotMessageBox";
import "./Home.css";
import { useContext } from "react";

export const ProductContext = createContext()

// const keyArray = [
//     'col1',
//     'col2',
//     'col3'
// ]

// const jsonArray = [
//     {
//         col1: 1,
//         col2: 'Vistendar',
//         col3: '2022-01-01'
//     },
//     {
//         col1: 2,
//         col2: 'wowcards',
//         col3: '2022-01-01'
//     },
//     {
//         col1: 3,
//         col2: 'Aitech',
//         col3: '2022-04-01'
//     },
//     {
//         col1: 4,
//         col2: 'tendar',
//         col3: '2022-03-01'
//     },7
// ]

const Home = () => {
    const [message , setMessage] = useState([])
    const [keyArray, setKeyArray] = useState([[]])
    const [jsonArray, setJsonArray] = useState([[]])
    
    return (
        <ProductContext.Provider value={{message, setMessage, keyArray, setKeyArray, setJsonArray, jsonArray}}>
            <div className="home-wrapper">
                <div className="header-wrapper">
                    <h1 className="header1">Company ChatBot based on AI</h1>
                    <h1 className="header2">based on <span>AI</span></h1>
                </div>
                <div className="searchbox-container">
                    <SearchBox />
                </div>
                <div className="chat-container">
                    {
                        message.map((element, idx) => 
                        element.user == 'USER'
                        ?   <div key={idx} className="user-message-container">
                                <UserMessageBox message={element.text}/>
                            </div>    
                        :   <div key={idx} className="bot-message-container">
                                <BotMesssageBox message={element.text} jsonArray={jsonArray[(idx + 1)/2]} keyArray={keyArray[(idx + 1)/2]}/>
                            </div>
                        )
                    }
                </div>
                {/* <BotMesssageBox message="hi there" jsonArray={jsonArray} keyArray={keyArray}/> */}
                <div className="social-container">
                    <div className="homeline-container">
                        <HomeLine />
                    </div>
                    <SocialBox />
                </div>
            </div>
        </ProductContext.Provider>
    )
}

export default Home;