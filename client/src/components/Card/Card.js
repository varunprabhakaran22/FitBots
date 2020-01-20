import React from 'react'
import './Card.css'
export const Card = (props) => {
    let listItem = props.list;
    let clickme = props.click
    
    let { setDataSet} = props;
    
    let enLarge =  () => {
        let dataa = listItem
        console.log(dataa);
    
        setDataSet(dataa)
    }
     
    return (
        
        //Rendering the attribute along with the value 
        <div className="cardItem">
            <div className ="card" style={{width : "18rem"}}>
                <div className ="card-body card-height">
                    <h5 className ="card-title">{listItem["Course Name"].toUpperCase()}</h5>
                    <p className ="providerName"><b>Provider </b>:<span> {listItem["Provider"]?listItem["Provider"]:'N/A'}</span></p>
                    <p className ="providerName"><b>University</b>:<span> {listItem["Universities/Institutions"]?listItem["Universities/Institutions"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Category </b>:<span> {listItem["Parent Subject"]?listItem["Parent Subject"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Next Session</b>:<span> {listItem["Next Session Date"]?listItem["Next Session Date"]:'N/A'}</span></p>
                    <p className ="providerName"><b>Length </b>:<span> {listItem["Length"]?listItem["Length"]:'N/A'}</span></p>
                    <button className="button" onClick={enLarge}> Click Me </button>
                </div>
            </div>
        </div>
    )
}

export default Card;