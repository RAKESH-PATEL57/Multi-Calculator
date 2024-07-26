import "../Scss/style.css";

function NormalCalculator()
{
    return (

        <>
        <section className="calculator normalCalculator" id="normalCalculator">
          <h1 className="calculatorName">Normal Calculator</h1>

          <input type="text" placeholder="0" id="inputBox" />
          <div>
            <button className="operator calBtn">AC</button>
            <button className="operator calBtn">DEL</button>
            <button className="operator calBtn">%</button>
            <button className="calBtn operator">/</button>
          </div>
          <div>
            <button className="calBtn">7</button>
            <button className="calBtn">8</button>
            <button className="calBtn">9</button>
            <button className="calBtn operator">*</button>
          </div>
          <div>
            <button className="calBtn">4</button>
            <button className="calBtn">5</button>
            <button className="calBtn">6</button>
            <button className="calBtn operator">-</button>
          </div>
          <div>
            <button className="calBtn">1</button>
            <button className="calBtn">2</button>
            <button className="calBtn">3</button>
            <button className="calBtn operator">+</button>
          </div>
          <div>
            <button id="zero" className="calBtn">0</button>
            <button className="calBtn">.</button>
            <button className="equalBtn calBtn">=</button>
          </div>
        </section>
        </>

    );
}

export default NormalCalculator;