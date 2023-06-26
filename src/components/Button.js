import React, {useState} from "react";
import './Button.css';




const Button = (props) =>{
       
    const {player, handler, id} = props;
    const [caption, setCaption] = useState('');

 
    const clickHandler = (event)=> {
        console.log(`Button ${id} is clicked and label is ${player.symbol}`);
        event.target.style.pointerEvents = 'none';
        setCaption(player.symbol);
        handler(id);
    }

    return (
        <div className="btn-container">
            <button className="btn" type="button" onClick={clickHandler} value={caption}>{caption}</button>
        </div>
    );
}

export default Button;