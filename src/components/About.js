import React, { useState } from 'react'

export default function About (props) {

    const [ myStyle, setMyStyle ] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )
 
   

    return (
        <>
        <div className={`container bg-${props.mode} my-4`}>
            <div className= {`accordion bg-${props.mode} my-4`} id="accordionExample" >
                <div className={`accordion-item bg-${props.mode} my-4`} >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show  text-${props.mode=='light'?'dark':'light'}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`accordion bg-${props.mode} my-4`} id="accordionExample" >
                <div className={`accordion-item bg-${props.mode} my-4`} >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show  text-${props.mode=='light'?'dark':'light'}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`accordion bg-${props.mode} my-4`} id="accordionExample" >
                <div className={`accordion-item bg-${props.mode} my-4`} >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show  text-${props.mode=='light'?'dark':'light'}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container">
        <button type="Button" value={Text} className="btn btn-warning" onClick={ handleOnClick }>{Text} </button></div> */}
        </>
    )
}

// const [Text, setText]=useState("DarkMode")

// let handleOnClick = () => {
//     if ( myStyle.color == 'black' ) {
//         setText("DarkMode")
//         setMyStyle( {
//             color: 'white',
//             backgroundColor: 'black'
//         } )
//     }else{
//         setText("LightMode")
//         setMyStyle( {
//             color: 'black',
//             backgroundColor: 'white'
//         } )
//     }


// }