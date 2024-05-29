import { useState } from "react";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setamount(convertedAmount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        {/* <div>{error ? <p>Error: {error}</p> : ""}</div> */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currencys) => setFrom(currencys)}
                onAmountChange={(amount) => setamount(amount)}
                selectCurrency={from}
              />{" "}
            </div>{" "}
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap{" "}
              </button>{" "}
            </div>{" "}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                onCurrencyChange={(currencys) => setTo(currencys)}
                selectCurrency={to}
                amountDisable
              />{" "}
            </div>{" "}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} {""}
              To {""} {to.toUpperCase()}{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
