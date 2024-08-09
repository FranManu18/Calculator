const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const mul = function (a, b) {
  return a * b;
};

const div = function (a, b) {
  if (b === 0) {
    return "No se puede dividir por 0 wachin";
  }
  return a / b;
};

const d = document;

function operate(a, b, op) {
  let result = 0;
  console.log(a);
  switch (true) {
    case op === "+":
      result = add(a, b);
      break;
    case op === "-":
      result = subtract(a, b);
      break;
    case op === "*":
      result = mul(a, b);
      break;
    case op === "/":
      result = div(a, b);
      break;
  }
  resultado = true;
  return result;
}

const $number = d.querySelectorAll(".number"),
  $operator = d.querySelectorAll(".operator"),
  $equals = d.querySelector(".equals"),
  $clean = d.querySelector(".clear"),
  $screen = d.querySelector(".screen"),
  $delete = d.querySelector(".delete");

let primerValor = 0,
  segundoValor = 0,
  operador = "",
  resultado = false;

$number.forEach((num) => {
  num.addEventListener("click", () => {
    if (resultado) {
      $screen.textContent = "";
      resultado = false;
    }
    $screen.textContent += `${num.textContent}`;
  });
});

$operator.forEach((op) => {
  op.addEventListener("click", () => {
    if ($screen.textContent === "") {
      primerValor = 0;
    } else {
      primerValor = parseInt($screen.textContent);
    }
    operador = op.textContent;
    $screen.textContent = "";
    $operator.forEach((op2) => {
      op2.disabled = true;
    });
  });
});

$equals.addEventListener("click", () => {
  if ($screen.textContent === "") {
    segundoValor = 0;
  } else {
    segundoValor = parseInt($screen.textContent);
  }
  $screen.textContent = `${operate(primerValor, segundoValor, operador)}`;
  $operator.forEach((op2) => {
    op2.disabled = false;
  });
});

$delete.addEventListener("click", () => {
  $screen.textContent = `${$screen.textContent.slice(0, -1)}`;
});

$clean.addEventListener("click", () => {
  $screen.textContent = "0";
});
