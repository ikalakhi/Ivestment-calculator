export default function UserInput(){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial_investment">INITIAL INVESTMENT</label>
                    <input type="number" required defaultValue="0"/>
                </p>
                <p>
                    <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                    <input type="number" required defaultValue="0"/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">EXPECTED RETURN</label>
                    <input type="number" required defaultValue="0"/>
                </p>
                <p>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" required defaultValue="0"/>
                </p>
            </div>
        </section>
    );
}
