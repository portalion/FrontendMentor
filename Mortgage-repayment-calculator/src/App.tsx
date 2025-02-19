import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";

function App() {
  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <a>Clear All</a>
      <NumberInput header="Mortgage Amount" extension="£" />
      <NumberInput header="Mortgage Term" extension="years" />
      <NumberInput header="Interest Rate" extension="%" />
      <RadioInput
        header="Mortgage Type"
        options={["Repayment", "Interest Only"]}
      />
      <button>Calculate Repayments</button>
    </div>
  );
}

export default App;
