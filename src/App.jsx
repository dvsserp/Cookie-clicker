import { useState } from "react";

   const App = () => {
  //   const greeting = "Hello, world";

  //   //let counter = 0;
  //   const [counter, setCounter] = useState(0);

  //   const handleButtonClick = ()=> {
  //     //counter += 1;
  //     setCounter(counter + 1);
  //   }

  //   const handleCounterDecrease = () =>{
  //     setCounter(counter - 1);
  //   }

  // return (
  //   <div>
  //     <h1>My React App</h1>
  //     <h2>{greeting}</h2>
  //     <p>{counter}</p>
  //     <button onClick={handleButtonClick}>Click me</button>
  //     <button onClick={handleCounterDecrease}>Decrease</button>
  //   </div>
  // );

  const [cookieClick, setClick] = useState(1)
  const [cookieCount, setCounter] = useState(0)
  const [upgradeCost1, setCost1] = useState(20)
  const [upgradeCost2, setCost2] = useState(30)
  const [upgradeCost3, setCost3] = useState(40)
  const [upgradeCost4, setCost4] = useState(1000)
  const [clicked, setClicked] = useState(false)
  
  const handleReset = () => {
    setClick(1)
    setCounter(0)
    setCost1(20)
    setCost2(30)
    setCost3(40)
    setCost4(1000)
  }

  const handleCookieClick = () => {
    setCounter(cookieCount + cookieClick)
    //styling
    setClicked(true);
    setTimeout(()=> {
      setClicked(false);
    }, 100);
  }

  const handleCookieRate = () =>{
    if(cookieCount >= upgradeCost1) {
      setCost1(upgradeCost1 + 20)
      setCounter(cookieCount - upgradeCost1)
      setClick(cookieClick + 1)
    }
  }
  
  const handleCookie2Rate = () => {
    if (cookieCount >= upgradeCost2) {
      setCost2(upgradeCost2 + 40)
      setCounter(cookieCount - upgradeCost2)
      setClick(cookieClick + 2)
    }
  }

  const handleCookie3Rate = () => {
      if (cookieCount >= upgradeCost3) {
        setCost3(upgradeCost3 + 60)
        setCounter(cookieCount - upgradeCost3)
        setClick(cookieClick + 3)
    }
  }

  const handleCookie4Rate = () => {
    if (cookieCount >= upgradeCost4) {
      setCost4(upgradeCost4 * 2 + 400)
      setCounter(cookieCount - upgradeCost4)
      setClick(cookieClick * 2)
    }
  }

  return (
    <div className="container">
      <h1>Cookie Clicker</h1>
      <button onClick={handleReset}>Reset</button>
      <h2>Number of Cookie: {cookieCount} </h2>
      <img src="https://pnghq.com/wp-content/uploads/cookie-png-transparent-image-download-full-hd.png"
      id={clicked ? "cookie clicked":"cookie"}alt="cookie" width={"200px"} onClick={handleCookieClick}></img>
      <h2>Rate of clicks: {cookieClick}</h2>
      <h2>Upgrades</h2>
      <div>
        <button onClick={handleCookieRate}>+1 click ({upgradeCost1})</button>
        <button onClick={handleCookie2Rate}>+2 click ({upgradeCost2})</button>
        <button onClick={handleCookie3Rate}>+3 click ({upgradeCost3})</button>
        <button onClick={handleCookie4Rate}>2x click ({upgradeCost4})</button>
      </div>
      
    </div>
  )
}

export default App;
