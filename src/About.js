import React,{useState} from 'react'
import './App.css'

export default function About() {
    
    const [myStyle, setMyStyle]=useState(
        {
            color:'black',
            backgroundColor:'white'
        }
    );
    const [btnText, setBtnText]=useState("Enable Dark Mode");
    
    const handleToggle=()=>{
        if (myStyle.color==="black"){
            setMyStyle({
                color: 'white',
                // backgroundColor:'#212529'
                backgroundColor:'#000000'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div className='py-5' style={myStyle}>
        <div className="jumbotron container">
  <h1 className="display-4">About me!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead togglebtn">
    <a className="btn btn-primary btn-lg" href="/" role="button" onClick={handleToggle}>{btnText}</a>
  </p>
</div>
    </div>
  )
}
