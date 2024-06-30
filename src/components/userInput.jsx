export default function UserInput({ onChangeInput, userInput }){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial_investment">INITIAL INVESTMENT</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
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
                        onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.duration}
                        onChange={(e) => onChangeInput("duration", e.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}
