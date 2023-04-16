import React, {useState} from 'react'
import PropTypes from 'prop-types'

function About(props){
    let myStyle = {
        color:'black',
        backgroundColor:'white'
    }

    const [style, setStyle] = useState(myStyle);
    const [text, setText] = useState('Dark Mode');

    let toggleStyle = () => {
        let k;
        let newtext;
        if (style.color==='white'){
            k = {
                color:'black',
                backgroundColor:'white'
            }
            newtext = 'Dark Mode';
        }
        else{
            k = {
                color:'white',
                backgroundColor:'black'
            }
            newtext = 'Light Mode';
        }
        setStyle(k);
        setText(newtext);
    }

    return (
        <div id="about">
            <div className="accordion accordion-flush" id="accordionFlushExample" style={style}>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-success" id="darkMode" onClick={toggleStyle} type="submit">{text}</button>
        </div>
    );
}

About.propTypes = {
    style:PropTypes.object
}

export default About;