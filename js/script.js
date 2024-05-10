// Copyright (c)2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html


function longDivision() {
    const dividend = parseInt(document.getElementById("dividend").value);
    const divisor = parseInt(document.getElementById("divisor").value);
    let quotient = 0;
    let remainder = dividend;
    let steps = "";

    for (let i = 0; i < 3; i++) {
        if (remainder >= divisor) {
            steps += `${remainder} - ${divisor} = ${remainder - divisor}  ${i === 0 ? "first" : i === 1 ? "second" : "third"} time<br>`;
            remainder -= divisor;
            quotient += 1;
        }
    }

    steps += `Therefore ${dividend} / ${divisor} = ${quotient} R ${remainder}`;
    document.getElementById("result").innerHTML = steps;
}