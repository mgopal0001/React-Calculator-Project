import React from "react";





function Button() {

  
  function checkValue(val) {
    // if(isNaN(document.getElementById("my-text").value)){
    //   document.getElementById("my-text").value = "";
    //   return;
    // }
    if (val === "C") {
      document.getElementById("my-text").value = "";
    } else {

      if (val === "+" || val === "-" || val === "*" || val === "/") {
        let expression = document.getElementById("my-text").value;
        if(val === "/" && expression ==="" || val === "*" && expression ==="" || val === "+" && expression ===""){
          return;
        }
        let notation = expression[expression.length - 1];
        if (notation === val) {
          return;
        }
        if (notation === "+" || notation === "-" || notation === "/" || notation === "*") {
          if(expression.length === 1){
            return;
          }

          let expression2 = expression.slice(0, -1) + val;
          document.getElementById("my-text").value = expression2;

        } else {
          document.getElementById("my-text").value += val;
        }
        return;
      }

      if (val === "=") {
        const ques = document.getElementById("my-text").value;
        if (ques.length <= 1) {
          console.log(ques);
          document.getElementById("my-text").value = ques;
        } else {
          try {
            const result = eval(document.getElementById("my-text").value);
            document.getElementById("my-text").value = result;
          }
          catch (err) {
            alert("Invalid Input");
            console.log(err);
            document.getElementById("my-text").value = "";
          }
        }

      } else {
        document.getElementById("my-text").value += val;
      }
    }

  }


  return (
    <div className="container">
      <div className="button">
        <button onClick={() => {
          checkValue("/");
        }}>
          /
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("7");
        }} >
          7
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("8");
        }}>
          8
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("9");
        }}>
          9
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("*");
        }}>
          *
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("4");
        }}>
          4
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("5");
        }}>
          5
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("6");
        }}>
          6
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("-");
        }}>
          -
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("1");
        }}>
          1
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("2");
        }}>
          2
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("3");
        }}>
          3
        </button>
      </div>
      <div className="button plus">
        <button onClick={() => {
          checkValue("+");
        }}>
          +
        </button>
      </div>
      <div className="button delete">
        <button onClick={() => {
          checkValue("C");
        }}>
          C
        </button>
      </div>
      <div className="button">
        <button onClick={() => {
          checkValue("0");
        }}>
          0
        </button>
      </div>
      <div className="button enter">
        <button onClick={() => {
          checkValue("=");
        }}>
          =
        </button>
      </div>
    </div>

  );

}
export default Button;