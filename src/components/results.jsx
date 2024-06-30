import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return(
        <div  className="center">
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}