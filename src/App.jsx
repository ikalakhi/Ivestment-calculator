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
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handelChange} />
      <Results input={userInput}/>
    </>
  )
}

export default App
