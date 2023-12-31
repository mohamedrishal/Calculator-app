import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const [sample, setSample] = useState("");
  const [display, setDisplay] = useState("");

  const click = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setInput("");
        setSample("");
        setDisplay("");
      } catch (error) {
        setInput("");
        setResult("Error");
        setDisplay("");
      }
    } else if (value === "CLEAR") {
      setInput("");
      setResult("0");
      setDisplay("");
      setSample("");
    } else if (value === "BACK") {
      var inp = input.slice(0, -1);
      setInput(inp);
      var dis = display.slice(0, -1);
      setDisplay(dis);
    } else {
      setDisplay(display + value);
      setInput(input + value);

      if (value === "/") {
        setSample(`${input}/`);
        setDisplay("");
      } else if (value === "+") {
        setSample(`${input}+`);
        setDisplay(" ");
      } else if (value === "*") {
        setSample(`${input}*`);
        setDisplay(" ");
      } else if (value === "-") {
        setSample(`${input}-`);
        setDisplay(" ");
      }
    }
  };

  return (
    <div
      style={{ height: "95vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ height: "83vh", width: "60vh" }}
        className="p-3 shodow bg-black rounded"
      >
        {/* input Box */}
        <div
          style={{ height: "8rem" }}
          className="d-flex justify-content-end p-2"
        >
          <div>
            <p className="text-white">{sample}</p>
            {input.length > 0 ? (
              <p className="text-white fw-bolder fs-1">{display}</p>
            ) : (
              <p className="text-white fw-bolder fs-1">{result}</p>
            )}
          </div>
        </div>

        {/* buttons */}
        <div className="d-flex flex-column justify-content-between align-items-center p-2">
          <div className="d-flex justify-content-between w-100 p-1">
            <button
              onClick={() => click("CLEAR")}
              style={{ width: "145px" }}
              className="rounded btn btn-dark border text-white px-3 py-3 fs-4"
            >
              <span className="text-danger">C</span>
            </button>
            <button
              onClick={() => click("BACK")}
              style={{ width: "145px" }}
              className="rounded btn btn-dark border text-white px-3 py-3 fs-4"
            >
              <i class="fa-solid fa-delete-left text-success"></i>
            </button>
            <button
              onClick={() => click("/")}
              className="rounded btn btn-dark border text-white px-3 py-3 w-25 fs-4"
            >
              <span
                style={{ fontSize: "5px" }}
                className="text-success fs-5 fw-bolder"
              >
                /
              </span>
            </button>
          </div>
          <div className="d-flex justify-content-between w-100 p-1">
            <button
              onClick={() => click("7")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              7
            </button>
            <button
              onClick={() => click("8")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              8
            </button>
            <button
              onClick={() => click("9")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              9
            </button>
            <button
              onClick={() => click("*")}
              className="rounded btn btn-dark border text-white px-3 py-3 w-25 fs-4"
            >
              <span className="text-success fs-4 fw-bolder">x</span>
            </button>
          </div>
          <div className="d-flex justify-content-between w-100 p-1">
            <button
              onClick={() => click("4")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              4
            </button>
            <button
              onClick={() => click("5")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              5
            </button>
            <button
              onClick={() => click("6")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              6
            </button>
            <button
              onClick={() => click("+")}
              className="rounded btn btn-dark border text-white px-3 py-3 w-25 fs-4"
            >
              <span className="text-success fs-3 fw-bolder">+</span>
            </button>
          </div>
          <div className="d-flex justify-content-between w-100 p-1">
            <button
              onClick={() => click("1")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              1
            </button>
            <button
              onClick={() => click("2")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              2
            </button>
            <button
              onClick={() => click("3")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4 "
            >
              3
            </button>
            <button
              onClick={() => click("-")}
              className="rounded btn btn-dark border text-white px-3 py-3 w-25 fs-4"
            >
              <span className="text-success fw-bolder fs-3">-</span>
            </button>
          </div>
          <div className="d-flex justify-content-between w-100 p-1 ">
            <button
              onClick={() => click("0")}
              className="rounded-circle btn btn-dark border text-white px-4  fs-4"
            >
              0
            </button>
            <button
              style={{ width: "4rem" }}
              onClick={() => click(".")}
              className="rounded-circle btn btn-dark border text-white px-4 me-1  fs-1"
            >
              .
            </button>
            <button
              onClick={() => click("=")}
              style={{ width: "12.2rem" }}
              className="rounded btn btn-success border text-white px-3 py-3 fs-4 "
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
