import React, {useState} from 'react'



function TextForm(props){
    const [text, setText] = useState("Your text");
    // setText("My text");

    let convertUpper = () => {
        setText(text.toUpperCase());
    }

    function change(event){
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3" id="mytext">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={change}></textarea>
                <button type="button" className="btn btn-primary" id="uppercase" onClick={convertUpper}>Uppercase</button>
            </div>
        </>
    );
}

export default TextForm;