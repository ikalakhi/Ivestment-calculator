export default function UserInput(){
    return(
        <div id="user-input">
            <form className="input-group">
                <label htmlFor="initial_investment">INITIAL INVESTMENT</label>
                <input type="text" required defaultValue="0"/>
                <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                <input type="text" required defaultValue="0"/>
                <label htmlFor="expected-return">EXPECTED RETURN</label>
                <input type="text" required defaultValue="0"/>
                <label htmlFor="duration">DURATION</label>
                <input type="text" required defaultValue="0"/>
            </form>
        </div>
    );
}