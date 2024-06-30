import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handelChange(inputIdentifier, newValue) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          }
      })
  }

  const validInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handelChange} />
      {!validInput && <p>Please enter a duration greater than 0</p>}
      {validInput && <Results input={userInput}/>}
    </>
  )
}

export default App
