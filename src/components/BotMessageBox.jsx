import React from "react";
import "./BotMessageBox.css";
import { SyncLoader } from "react-spinners";
import DrugTable from './DrugTable';

const BotMesssageBox = ({message, jsonArray, keyArray}) => {

    return (
        <div className="bot-message">
            <div className="bot-message-wrapper">
                {
                    message === "LOADING" ? <p><SyncLoader color="#d2d2d2" size={12}/></p> : message.split("\n").map((item, idx) => <p key={idx}>{item}</p>)
                }
            </div>
            <div className="bot-table">
                {
                    message !== "LOADING" &&
                    <DrugTable jsonArray={jsonArray} keyArray={keyArray} />
                }
            </div>
        </div>
    )
}

export default BotMesssageBox;