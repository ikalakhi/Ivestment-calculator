import { useState } from "react";

export default function UserInput(){
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
                [inputIdentifier]: newValue
            }
        })
    }
    console.log(userInput);

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial_investment">INITIAL INVESTMENT</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) => handelChange("initialInvestment", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) => handelChange("annualInvestment", e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">EXPECTED RETURN</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) => handelChange("expectedReturn", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.duration}
                        onChange={(e) => handelChange("duration", e.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
