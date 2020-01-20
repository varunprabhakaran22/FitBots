import React from 'react'
import './Display.css'

// Receive the props from the parent components
export const Display = (props) => {
    let listItem = props.data
    let { setResult,setLoading } = props;
    //Render the list one by one in card
    return (
        <div className = "alignCenter">
            <div className="cardItem">
                <div className ="card" style={{width : "18rem"}}>
                    <div className ="card-body card-height">
                        <h5 className ="card-title"> { listItem.name.toUpperCase()}</h5>
                        <p className ="providerName"><b> Weather </b> : <span> {listItem.weather[0].main}</span></p>
                        <p className ="providerName"><b>Temp</b> : <span>{listItem.main.temp} </span></p>
                        <p className ="providerName"><b>Wind Speed </b> : <span>{listItem.wind.speed} </span></p>
                        <p className ="providerName"><b>humidity </b> : <span>{listItem.main.humidity} </span></p>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Display;