const deg = document.getElementById("c_btn_deg");
const f_e = document.getElementById("c_btn_f_e");
const MC = document.getElementById("c_btn_MC");
const MR = document.getElementById("c_btn_MR");
const m_plus = document.getElementById("c_btn_m_plus");
const m_min = document.getElementById("c_btn_m_min");
const MS = document.getElementById("c_btn_MS");
const btn_2nd = document.getElementById("c_btn_2nd");
const pie = document.getElementById("c_btn_pie");
const e = document.getElementById("c_btn_e");
const X_r_2 = document.getElementById("c_btn_x_r_2");
const btn_1dx = document.getElementById("c_btn_1dx");
/*done*/const modulo = document.getElementById("c_btn_modulo");
const exp = document.getElementById("c_btn_exp");
const sqroot = document.getElementById("c_btn_sqroot");
const start_braket = document.getElementById("c_btn_start_braket");
const end_braket = document.getElementById("c_btn_end_braket");
const nnot = document.getElementById("c_btn_nnot");
const x_raise_y = document.getElementById("c_btn_x_raise_y");
const btn_10_r_x = document.getElementById("c_btn_10_r_x");
const log = document.getElementById("c_btn_log");
const log_ln = document.getElementById("c_btn_log_ln");
/*done*/const btn_1 = document.getElementById("c_btn_1");
/*done*/const btn_2 = document.getElementById("c_btn_2");
/*done*/const btn_3 = document.getElementById("c_btn_3");
/*done*/const btn_4 = document.getElementById("c_btn_4");
/*done*/const btn_5 = document.getElementById("c_btn_5");
/*done*/const btn_6 = document.getElementById("c_btn_6");
/*done*/const btn_7 = document.getElementById("c_btn_7");
/*done*/const btn_8 = document.getElementById("c_btn_8");
/*done*/const btn_9 = document.getElementById("c_btn_9");
/*done*/const btn_0 = document.getElementById("c_btn_0");
/*done*/const btn_dot = document.getElementById("c_btn_dot")
/*done*/const btn_mod = document.getElementById("c_btn_mod")
/*done*/const btn_plusminus = document.getElementById("c_btn_plusminus")
/*done*/const btn_plus = document.getElementById("c_btn_plus")
/*done*/const btn_subtract = document.getElementById("c_btn_subtract")
/*done*/const btn_multiply = document.getElementById("c_btn_multiply")
/*done*/const btn_divide = document.getElementById("c_btn_divide")
/*done*/const btn_C = document.getElementById("c_btn_C")
/*done*/const btn_clear = document.getElementById("c_btn_clear")
/*done*/const display = document.getElementById("c_display")
/*done*/const equal = document.getElementById("c_btn_equal")

btn_1.addEventListener("click", () => { add(1) })
btn_2.addEventListener("click", () => { add(2) })
btn_3.addEventListener("click", () => { add(3) })
btn_4.addEventListener("click", () => { add(4) })
btn_5.addEventListener("click", () => { add(5) })
btn_6.addEventListener("click", () => { add(6) })
btn_7.addEventListener("click", () => { add(7) })
btn_8.addEventListener("click", () => { add(8) })
btn_9.addEventListener("click", () => { add(9) })
btn_0.addEventListener("click", () => { add(0) })

//other
c_btn_dot.addEventListener("click", () => { add(".") })
c_btn_mod.addEventListener("click", () => { add("%") })
c_btn_plusminus.addEventListener("click", () => { add("-") })
modulo.addEventListener("click", () => { add("|") })

//operator 
c_btn_plus.addEventListener("click", () => { add("+") })
c_btn_subtract.addEventListener("click", () => { add("-") })
c_btn_multiply.addEventListener("click", () => { add("*") })
c_btn_divide.addEventListener("click", () => { add("/") })
//clear method
c_btn_C.addEventListener("click", clear)
c_btn_clear.addEventListener("click", clear_one)


//equal to 

equal.addEventListener("click", () => {
    try {
        let equation = display.innerHTML;
        clear()
        if (equation.includes("|")) {

            // let str = "4+|4-6|";
            let match = equation.match(/\|(.*?)\|/);
            let valueBetweenPipes = match[1];
            let temp = Math.abs(eval(valueBetweenPipes))
            console.log(temp)
            let temp2 = equation.replace("|" + valueBetweenPipes + "|", temp);
            console.log(temp2)
            display.innerHTML += eval(temp2);
        }
        else {
            console.log("diff")
            display.innerHTML += eval(equation);
        }
    }
    catch (e) {
        clear()
        display.innerHTML += "syntax error";
    }
})

function add(n) {
    display.innerHTML += n;
}


function clear() {
    display.innerHTML = "";
}


function clear_one() {
    let str = display.innerHTML;
    let new_str = str.slice(0, (str.length - 1))
    clear();
    display.innerHTML += new_str;

}