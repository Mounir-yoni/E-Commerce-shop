import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export default function Loginpanel() {
    const StyledWrapper = styled.div`
  .inputGroup {
    font-family: 'Segoe UI', sans-serif;
    margin: 1em 0 1em 0;
    width: 450px;
    position: relative;
  }

  .inputGroup input {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 20px;
    width: 100%;
  }

  .inputGroup label {
    font-size: 100%;
    position: absolute;
    left: 0;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(100, 100, 100);
  }

  .inputGroup :is(input:focus, input:valid)~label {
    transform: translateY(-50%) scale(.9);
    margin: 0em;
    margin-left: 1.3em;
    padding: 0.4em;
    background-color:rgb(252, 252, 252);
  }

  .inputGroup :is(input:focus, input:valid) {
    border-color: rgb(150, 150, 200);
  }`;

  const StyledWrapperbutton = styled.div`
  button {
    padding: 10px 50px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    width: 100%;
    color: #ffffff80;
    text-shadow: none;
    background: black;
    cursor: pointer;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;
  }

  #btn:hover,
  :focus {
    color: #ffffff;
    background:#272529;
    border: 1px solid #272529;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #272529, 0 0 10px #272529, 0 0 40px #272529,
      0 0 100px #272529;
  }`;

  const StyledWrapperloading = styled.div`
  .dot-spinner {
    --uib-size: 2.8rem;
    --uib-speed: .9s;
    --uib-color: #183153;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--uib-size);
    width: var(--uib-size);
  }

  .dot-spinner__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }

  .dot-spinner__dot::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }

  .dot-spinner__dot:nth-child(2) {
    transform: rotate(45deg);
  }

  .dot-spinner__dot:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
  }

  .dot-spinner__dot:nth-child(3) {
    transform: rotate(90deg);
  }

  .dot-spinner__dot:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
  }

  .dot-spinner__dot:nth-child(4) {
    transform: rotate(135deg);
  }

  .dot-spinner__dot:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
  }

  .dot-spinner__dot:nth-child(5) {
    transform: rotate(180deg);
  }

  .dot-spinner__dot:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
  }

  .dot-spinner__dot:nth-child(6) {
    transform: rotate(225deg);
  }

  .dot-spinner__dot:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
  }

  .dot-spinner__dot:nth-child(7) {
    transform: rotate(270deg);
  }

  .dot-spinner__dot:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
  }

  .dot-spinner__dot:nth-child(8) {
    transform: rotate(315deg);
  }

  .dot-spinner__dot:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
  }

  @keyframes pulse0112 {
    0%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }

    50% {
      transform: scale(1);
      opacity: 1;
    }
  }`;

  const StyledWrapperbuttongoogle = styled.div`
  button {
  margin: 0.8rem 0;
    width: 100%;
    display: flex;
    padding: 0.8rem 1.4rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    gap: 0.75rem;
    color: rgb(65, 63, 63);
    background-color: #fff;
    cursor: pointer;
    transition: all .6s ease;
  }

  .button svg {
    height: 24px;
  }

  button:hover {
    transform: scale(1.02);
  }`;







    const [loading, setLoading] = useState(false);



    return(
        
        <Container fluid="xl" className=' d-flex flex-column align-items-center'>
        <div className='' style={{textAlign:"center",marginTop:"100px"}}>
            <header style={{width:"100%",textAlign:"center"}}> 
                <h1>Login</h1>
            </header>
            <StyledWrapper>
                <div className="inputGroup">
                    <input type="text" required autoComplete="off" />
                    <label htmlFor="name">Name</label>
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <div className="inputGroup">
                    <input type="password" required autoComplete="off" />
                    <label htmlFor="name">password</label>
                </div>
            </StyledWrapper>

            <StyledWrapperbutton>
            <button id="btn" onClick={() => setLoading(true)}>Login</button>
            </StyledWrapperbutton>

            <StyledWrapperbutton>
            <button id="btn" onClick={() => setLoading(true)} style={{marginTop:"10px"}}>Login As Admin</button>
            </StyledWrapperbutton>



        <StyledWrapperbuttongoogle>
            <button className="button" onClick={() => setLoading(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                </svg>
                Continue with Google
            </button>
        </StyledWrapperbuttongoogle>



            </div>
            {loading && (
  <StyledWrapperloading>
    <div className="dot-spinner" style={{ marginTop: "50px" }}>
      {Array(8).fill().map((_, index) => (
        <div className="dot-spinner__dot" key={index} />
      ))}
    </div>
  </StyledWrapperloading>
)}
            <h2 style={{fontFamily:'IBM Plex Sans Arabic', fontSize:'20px',margin:'0'}}>Don't have an account? <a href="/register">Register</a></h2>

        </Container>
    )
}
