let c0 = [];
let c1 = [];
let c2 = [];
let c3 = [];
let c4 = [];
let c5 = [];
let c6 = [];

let r0 = [c0[0], c1[0], c2[0], c3[0], c4[0], c5[0], c6[0]];
let r1 = [c0[1], c1[1], c2[1], c3[1], c4[1], c5[1], c6[1]];
let r2 = [c0[2], c1[2], c2[2], c3[2], c4[2], c5[2], c6[2]];
let r3 = [c0[3], c1[3], c2[3], c3[3], c4[3], c5[3], c6[3]];
let r4 = [c0[4], c1[4], c2[4], c3[4], c4[4], c5[4], c6[4]];
let r5 = [c0[5], c1[5], c2[5], c3[5], c4[5], c5[5], c6[5]];
let r6 = [c0[6], c1[6], c2[6], c3[6], c4[6], c5[6], c6[6]];

let d1 = [c0[2], c1[3], c2[4], c3[5]];
let d2 = [c0[1], c1[2], c2[3], c3[4], c4[5]];
let d3 = [c0[0], c1[1], c2[2], c3[3], c4[4], c5[5]];
let d4 = [c1[0], c2[1], c3[2], c4[3], c5[4], c6[5]];
let d5 = [c2[0], c3[1], c4[2], c5[3], c6[4]];
let d6 = [c3[0], c4[1], c5[2], c6[3]];

let d7 = [c3[0], c2[1], c1[2], c0[3]];
let d8 = [c4[0], c3[1], c2[2], c1[3], c0[4]];
let d9 = [c5[0], c4[1], c3[2], c2[3], c1[4], c0[5]];
let d10 = [c6[0], c5[1], c4[2], c3[3], c2[4], c1[5]];
let d11 = [c6[1], c5[2], c4[3], c3[4], c2[5]];
let d12 = [c6[2], c5[3], c4[4], c3[5]];

let playing = true;

for (let i=0; i<=6; i++){

    const myCol = document.querySelector(`.col.num${i}`);

    const moveSelection = document.querySelector(`.col.num${i} .start`);

    myCol.addEventListener ('click', 
        function (){

            if (moveSelection.classList.contains("yellowsTurn") && playing===true){

                document.querySelector("h1").innerHTML = "It's Red's Turn";

                document.querySelector(`.col.num0 .start`).classList.replace("yellowsTurn", "redsTurn");
                document.querySelector(`.col.num1 .start`).classList.replace("yellowsTurn", "redsTurn");
                document.querySelector(`.col.num2 .start`).classList.replace("yellowsTurn", "redsTurn");
                document.querySelector(`.col.num3 .start`).classList.replace("yellowsTurn", "redsTurn");
                document.querySelector(`.col.num4 .start`).classList.replace("yellowsTurn", "redsTurn");
                document.querySelector(`.col.num5 .start`).classList.replace("yellowsTurn", "redsTurn");
                document.querySelector(`.col.num6 .start`).classList.replace("yellowsTurn", "redsTurn");
                
                const myMove = document.querySelector(`.col.num${i} .empty`);
                
                myMove.classList.replace("empty", "yellow");
                
                switch (i){
                    case 0:
                        c0.push("yellow");
                    break;

                    case 1:
                        c1.push("yellow");
                    break;

                    case 2:
                        c2.push("yellow");
                    break;

                    case 3:
                        c3.push("yellow");
                    break;

                    case 4:
                        c4.push("yellow");
                    break;
                    
                    case 5:
                        c5.push("yellow");
                    break;
                    
                    case 6:
                        c6.push("yellow");
                    break;
                }
                    
                r0 = [c0[0], c1[0], c2[0], c3[0], c4[0], c5[0], c6[0]];
                r1 = [c0[1], c1[1], c2[1], c3[1], c4[1], c5[1], c6[1]];
                r2 = [c0[2], c1[2], c2[2], c3[2], c4[2], c5[2], c6[2]];
                r3 = [c0[3], c1[3], c2[3], c3[3], c4[3], c5[3], c6[3]];
                r4 = [c0[4], c1[4], c2[4], c3[4], c4[4], c5[4], c6[4]];
                r5 = [c0[5], c1[5], c2[5], c3[5], c4[5], c5[5], c6[5]];
                r6 = [c0[6], c1[6], c2[6], c3[6], c4[6], c5[6], c6[6]];

                d1 = [c0[2], c1[3], c2[4], c3[5]];
                d2 = [c0[1], c1[2], c2[3], c3[4], c4[5]];
                d3 = [c0[0], c1[1], c2[2], c3[3], c4[4], c5[5]];
                d4 = [c1[0], c2[1], c3[2], c4[3], c5[4], c6[5]];
                d5 = [c2[0], c3[1], c4[2], c5[3], c6[4]];
                d6 = [c3[0], c4[1], c5[2], c6[3]];
                
                d7 = [c3[0], c2[1], c1[2], c0[3]];
                d8 = [c4[0], c3[1], c2[2], c1[3], c0[4]];
                d9 = [c5[0], c4[1], c3[2], c2[3], c1[4], c0[5]];
                d10 = [c6[0], c5[1], c4[2], c3[3], c2[4], c1[5]];
                d11 = [c6[1], c5[2], c4[3], c3[4], c2[5]];
                d12 = [c6[2], c5[3], c4[4], c3[5]];

                for (let j=0; j <= c0.length - 4; j++){
                    if (c0[j]===c0[j+1]&&c0[j]===c0[j+2]&&c0[j]===c0[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c1.length - 4; j++){
                    if (c1[j]===c1[j+1]&&c1[j]===c1[j+2]&&c1[j]===c1[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c2.length - 4; j++){
                    if (c2[j]===c2[j+1]&&c2[j]===c2[j+2]&&c2[j]===c2[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c3.length - 4; j++){
                    if (c3[j]===c3[j+1]&&c3[j]===c3[j+2]&&c3[j]===c3[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c4.length - 4; j++){
                    if (c4[j]===c4[j+1]&&c4[j]===c4[j+2]&&c4[j]===c4[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c5.length - 4; j++){
                    if (c5[j]===c5[j+1]&&c5[j]===c5[j+2]&&c5[j]===c5[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c6.length - 4; j++){
                    if (c6[j]===c6[j+1]&&c6[j]===c6[j+2]&&c6[j]===c6[j+3]){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }


                for (let j=0; j <= r0.length - 4; j++){
                    if (r0[j]===r0[j+1]&&r0[j]===r0[j+2]&&r0[j]===r0[j+3]&&r0[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r1.length - 4; j++){
                    if (r1[j]===r1[j+1]&&r1[j]===r1[j+2]&&r1[j]===r1[j+3]&&r1[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r2.length - 4; j++){
                    if (r2[j]===r2[j+1]&&r2[j]===r2[j+2]&&r2[j]===r2[j+3]&&r2[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r3.length - 4; j++){
                    if (r3[j]===r3[j+1]&&r3[j]===r3[j+2]&&r3[j]===r3[j+3]&&r3[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r4.length - 4; j++){
                    if (r4[j]===r4[j+1]&&r4[j]===r4[j+2]&&r4[j]===r4[j+3]&&r4[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r5.length - 4; j++){
                    if (r5[j]===r5[j+1]&&r5[j]===r5[j+2]&&r5[j]===r5[j+3]&&r5[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }


                for (let j=0; j <= d1.length - 4; j++){
                    if (d1[j]===d1[j+1]&&d1[j]===d1[j+2]&&d1[j]===d1[j+3]&&d1[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d2.length - 4; j++){
                    if (d2[j]===d2[j+1]&&d2[j]===d2[j+2]&&d2[j]===d2[j+3]&&d2[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d3.length - 4; j++){
                    if (d3[j]===d3[j+1]&&d3[j]===d3[j+2]&&d3[j]===d3[j+3]&&d3[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d4.length - 4; j++){
                    if (d4[j]===d4[j+1]&&d4[j]===d4[j+2]&&d4[j]===d4[j+3]&&d4[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d5.length - 4; j++){
                    if (d5[j]===d5[j+1]&&d5[j]===d5[j+2]&&d5[j]===d5[j+3]&&d5[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d6.length - 4; j++){
                    if (d6[j]===d6[j+1]&&d6[j]===d6[j+2]&&d6[j]===d6[j+3]&&d6[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d7.length - 4; j++){
                    if (d7[j]===d7[j+1]&&d7[j]===d7[j+2]&&d7[j]===d7[j+3]&&d7[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d8.length - 4; j++){
                    if (d8[j]===d8[j+1]&&d8[j]===d8[j+2]&&d8[j]===d8[j+3]&&d8[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d9.length - 4; j++){
                    if (d9[j]===d9[j+1]&&d9[j]===d9[j+2]&&d9[j]===d9[j+3]&&d9[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d10.length - 4; j++){
                    if (d10[j]===d10[j+1]&&d10[j]===d10[j+2]&&d10[j]===d10[j+3]&&d10[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d11.length - 4; j++){
                    if (d11[j]===d11[j+1]&&d11[j]===d11[j+2]&&d11[j]===d11[j+3]&&d11[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d12.length - 4; j++){
                    if (d12[j]===d12[j+1]&&d12[j]===d12[j+2]&&d12[j]===d12[j+3]&&d12[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Yellow WINS!";
                        playing = false;
                    }
                }

            } else if (moveSelection.classList.contains("redsTurn") && playing===true){

                document.querySelector("h1").innerHTML = "It's Yellow's Turn";

                document.querySelector(`.col.num0 .start`).classList.replace("redsTurn", "yellowsTurn");
                document.querySelector(`.col.num1 .start`).classList.replace("redsTurn", "yellowsTurn");
                document.querySelector(`.col.num2 .start`).classList.replace("redsTurn", "yellowsTurn");
                document.querySelector(`.col.num3 .start`).classList.replace("redsTurn", "yellowsTurn");
                document.querySelector(`.col.num4 .start`).classList.replace("redsTurn", "yellowsTurn");
                document.querySelector(`.col.num5 .start`).classList.replace("redsTurn", "yellowsTurn");
                document.querySelector(`.col.num6 .start`).classList.replace("redsTurn", "yellowsTurn");
                
                const myMove = document.querySelector(`.col.num${i} .empty`);
                
                myMove.classList.replace("empty", "red");
                
                switch (i){
                    case 0:
                        c0.push("red");
                    break;

                    case 1:
                        c1.push("red");
                    break;

                    case 2:
                        c2.push("red");
                    break;

                    case 3:
                        c3.push("red");
                    break;

                    case 4:
                        c4.push("red");
                    break;
                    
                    case 5:
                        c5.push("red");
                    break;
                    
                    case 6:
                        c6.push("red");
                    break;
                }
                    
                r0 = [c0[0], c1[0], c2[0], c3[0], c4[0], c5[0], c6[0]];
                r1 = [c0[1], c1[1], c2[1], c3[1], c4[1], c5[1], c6[1]];
                r2 = [c0[2], c1[2], c2[2], c3[2], c4[2], c5[2], c6[2]];
                r3 = [c0[3], c1[3], c2[3], c3[3], c4[3], c5[3], c6[3]];
                r4 = [c0[4], c1[4], c2[4], c3[4], c4[4], c5[4], c6[4]];
                r5 = [c0[5], c1[5], c2[5], c3[5], c4[5], c5[5], c6[5]];
                r6 = [c0[6], c1[6], c2[6], c3[6], c4[6], c5[6], c6[6]];

                d1 = [c0[2], c1[3], c2[4], c3[5]];
                d2 = [c0[1], c1[2], c2[3], c3[4], c4[5]];
                d3 = [c0[0], c1[1], c2[2], c3[3], c4[4], c5[5]];
                d4 = [c1[0], c2[1], c3[2], c4[3], c5[4], c6[5]];
                d5 = [c2[0], c3[1], c4[2], c5[3], c6[4]];
                d6 = [c3[0], c4[1], c5[2], c6[3]];
                
                d7 = [c3[0], c2[1], c1[2], c0[3]];
                d8 = [c4[0], c3[1], c2[2], c1[3], c0[4]];
                d9 = [c5[0], c4[1], c3[2], c2[3], c1[4], c0[5]];
                d10 = [c6[0], c5[1], c4[2], c3[3], c2[4], c1[5]];
                d11 = [c6[1], c5[2], c4[3], c3[4], c2[5]];
                d12 = [c6[2], c5[3], c4[4], c3[5]];

                for (let j=0; j <= c0.length - 4; j++){
                    if (c0[j]===c0[j+1]&&c0[j]===c0[j+2]&&c0[j]===c0[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c1.length - 4; j++){
                    if (c1[j]===c1[j+1]&&c1[j]===c1[j+2]&&c1[j]===c1[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c2.length - 4; j++){
                    if (c2[j]===c2[j+1]&&c2[j]===c2[j+2]&&c2[j]===c2[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c3.length - 4; j++){
                    if (c3[j]===c3[j+1]&&c3[j]===c3[j+2]&&c3[j]===c3[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c4.length - 4; j++){
                    if (c4[j]===c4[j+1]&&c4[j]===c4[j+2]&&c4[j]===c4[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c5.length - 4; j++){
                    if (c5[j]===c5[j+1]&&c5[j]===c5[j+2]&&c5[j]===c5[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= c6.length - 4; j++){
                    if (c6[j]===c6[j+1]&&c6[j]===c6[j+2]&&c6[j]===c6[j+3]){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }


                for (let j=0; j <= r0.length - 4; j++){
                    if (r0[j]===r0[j+1]&&r0[j]===r0[j+2]&&r0[j]===r0[j+3]&&r0[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r1.length - 4; j++){
                    if (r1[j]===r1[j+1]&&r1[j]===r1[j+2]&&r1[j]===r1[j+3]&&r1[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r2.length - 4; j++){
                    if (r2[j]===r2[j+1]&&r2[j]===r2[j+2]&&r2[j]===r2[j+3]&&r2[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r3.length - 4; j++){
                    if (r3[j]===r3[j+1]&&r3[j]===r3[j+2]&&r3[j]===r3[j+3]&&r3[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r4.length - 4; j++){
                    if (r4[j]===r4[j+1]&&r4[j]===r4[j+2]&&r4[j]===r4[j+3]&&r4[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= r5.length - 4; j++){
                    if (r5[j]===r5[j+1]&&r5[j]===r5[j+2]&&r5[j]===r5[j+3]&&r5[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }


                for (let j=0; j <= d1.length - 4; j++){
                    if (d1[j]===d1[j+1]&&d1[j]===d1[j+2]&&d1[j]===d1[j+3]&&d1[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d2.length - 4; j++){
                    if (d2[j]===d2[j+1]&&d2[j]===d2[j+2]&&d2[j]===d2[j+3]&&d2[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d3.length - 4; j++){
                    if (d3[j]===d3[j+1]&&d3[j]===d3[j+2]&&d3[j]===d3[j+3]&&d3[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d4.length - 4; j++){
                    if (d4[j]===d4[j+1]&&d4[j]===d4[j+2]&&d4[j]===d4[j+3]&&d4[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d5.length - 4; j++){
                    if (d5[j]===d5[j+1]&&d5[j]===d5[j+2]&&d5[j]===d5[j+3]&&d5[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d6.length - 4; j++){
                    if (d6[j]===d6[j+1]&&d6[j]===d6[j+2]&&d6[j]===d6[j+3]&&d6[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d7.length - 4; j++){
                    if (d7[j]===d7[j+1]&&d7[j]===d7[j+2]&&d7[j]===d7[j+3]&&d7[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d8.length - 4; j++){
                    if (d8[j]===d8[j+1]&&d8[j]===d8[j+2]&&d8[j]===d8[j+3]&&d8[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d9.length - 4; j++){
                    if (d9[j]===d9[j+1]&&d9[j]===d9[j+2]&&d9[j]===d9[j+3]&&d9[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d10.length - 4; j++){
                    if (d10[j]===d10[j+1]&&d10[j]===d10[j+2]&&d10[j]===d10[j+3]&&d10[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d11.length - 4; j++){
                    if (d11[j]===d11[j+1]&&d11[j]===d11[j+2]&&d11[j]===d11[j+3]&&d11[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
                for (let j=0; j <= d12.length - 4; j++){
                    if (d12[j]===d12[j+1]&&d12[j]===d12[j+2]&&d12[j]===d12[j+3]&&d12[j]!=undefined){
                        document.querySelector("h1").innerHTML = "Red WINS!";
                        playing = false;
                    }
                }
            }
        }
    )
}