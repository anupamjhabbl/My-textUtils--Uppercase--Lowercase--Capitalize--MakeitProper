import React, {useState} from 'react'

function TextForm(props){
    const [text, setText] = useState("");
    // setText("My text");

    let convertUpper = () => {
        setText(text.toUpperCase());
    }

    function change(event){
        setText(event.target.value);
    }

    function k(){
        let t = text[0];
        return t;
    }

    function wordCount(){
        let arr = text.split(' ');
        if (text[text.length-1]==' '){
            return arr.length-1;
        }
        return arr.length;
    }

    function convertLower(){
        setText(text.toLowerCase());
    }

    function removeExtraSpace(){
        let k = text;
        let regEx = /\s+/g
        k = k.replace(regEx,' ');
        setText(k);
    }

    function capitalize(){
        let k = text;
        k = k[0].toUpperCase()+k.substring(1);
        let i = 0;
        while (i<k.length){
            if (k[i]==='.'){
                i++;
                while(i<k.length && k[i]==' '){
                    i++;
                }
                if (i!==k.length){
                    k = k.substring(0,i)+k[i].toUpperCase()+k.substring(i+1);
                }

            }
            i++;
        }
        setText(k);
    }

    let calcTime = () => {
        return 0.005*wordCount();
    }

    let clearText = () => {
        setText('');
    }

    async function copytoClipboard(){
        try{
            await navigator.clipboard.writeText(text);
        }
        catch(e){
            alert("Insufficient permission");
        }
    }

    function copyText(){
        copytoClipboard();
    }

    return (
        <>
            <div className="mb-3" id="mytext">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={change}></textarea>
                <div id="button">
                    <button type="button" className="btn btn-primary" id="uppercase" onClick={convertUpper}>UpperCase</button>
                    <button type="button" className="btn btn-primary" id="uppercase" onClick={convertLower}>LowerCase</button>
                    <button type="button" className="btn btn-primary" id="uppercase" onClick={capitalize}>capitalize</button>
                    <button type="button" className="btn btn-primary" id="uppercase" onClick={clearText}>clearText</button>
                    <button type="button" className="btn btn-primary" id="uppercase" onClick={copyText}>copyText</button>
                    <button type="button" className="btn btn-primary" id="uppercase" onClick={removeExtraSpace}>removeExtraSpace</button>
                </div>
            </div>

            <div id="container">
                <h3>{k()}our Text summary</h3>
                <p>No of words: {wordCount()}</p>
                <p>No of letters: {text.length}</p>
                <p>Time to read: {calcTime()}</p>
            </div>
        </>
    );
}

export default TextForm;