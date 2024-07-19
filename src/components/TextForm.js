import React, { useState } from 'react'

export default function TextForm (props) {
    const [ Text, setText ] = useState('');

    const ToLower = () => {
        setText( Text.toLowerCase() );
    }
    const Remov = () => {
        setText( " " );
    }
    const ToUpper = () => {
        setText( Text.toUpperCase() );
    }
    const Tocapital = () => {
        // setText( Text.);
    }
    const CopyClip = () => {
        let text= document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = ( event ) => {
        setText( event.target.value );
    }
    return (

        <>
            <div className={`container `}>
                <h2 className={`text-${props.mode=='light'?'dark':'light'}`}>Analyze Your Text  </h2>
                <div className={`my-3`}>
                    {/* <label htmlFor="myBox" className='form-lable1'> Example textArea</label> */ }
                    <textarea value={ Text } onChange={ handleOnChange } className={`form-control bg-${ props.mode} text-${props.mode=='light'?'dark':'light'}`} id="myBox" rows="8"> </textarea>
                </div>
                <div className="side-bar">
                    <button className={`btn btn-${props.mode=='dark'?'warning':'dark'}`} onClick={ Remov } >  Remove</button>
                    <button className={`btn btn-${props.mode=='dark'?'warning':'dark'}`} onClick={ ToUpper }>UpperCase</button>
                    <button className={`btn btn-${props.mode=='dark'?'warning':'dark'} `} onClick={ ToLower }> LowerCase</button>
                    <button className={`btn btn-${props.mode=='dark'?'warning':'dark'} `} onClick={ CopyClip }> Copy To clipboard</button>
                     <button className={`btn btn-${props.mode=='dark'?'warning':'dark'}`} onClick={ Tocapital }  > Capitalize</button>  
                </div>
            </div>
            <div className="container ">
                <div className={`textSummary text-${props.mode=='light'?'dark':'light'}`}>
                    <h3> Text Summary</h3>
                    <p> {Text.split(" ").length} Words </p>
                    <p>Text Length:{Text.length} </p>
                </div>
            </div>


        </>
        //  
    )
}
