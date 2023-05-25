var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var q4 = document.getElementById("q4")
var q5 = document.getElementById("q5")
var q6 = document.getElementById("q6")
var q7 = document.getElementById("q7")
var q8 = document.getElementById("q8")
var q9 = document.getElementById("q9")
var rst = document.getElementById("reset")
var i = 0;
var j = 0;
q1.onclick = () => posição(q1)
q2.onclick = () => posição(q2)
q3.onclick = () => posição(q3)
q4.onclick = () => posição(q4)
q5.onclick = () => posição(q5)
q6.onclick = () => posição(q6)
q7.onclick = () => posição(q7)
q8.onclick = () => posição(q8)
q9.onclick = () => posição(q9)
resizeTo.onclick = () => resetar()


function posição(pos){
    
    if(i==0){
        pos.innerText = "X"
        i++
        j++
    }
    else{
        pos.innerText = "O"
        i--
        j++
    }
    if(j>=3)
    vitoria()
}
function vitoria(){
    if((q1.innerHTML == "O" && q2.innerHTML == "O" && q3.innerHTML == "O" || q1.innerHTML == "X" && q2.innerHTML == "X" && q3.innerHTML == "X") && (q1.innerHTML==q2.innerHTML && q2.innerHTML==q3.innerHTML))
        alert(`vitoria do ${q1.innerHTML}`)
    else if((q4.innerHTML == "O" && q5.innerHTML == "O" && q6.innerHTML == "O" || q4.innerHTML == "X" && q5.innerHTML == "X" && q6.innerHTML == "X") && (q4.innerHTML==q5.innerHTML && q5.innerHTML==q6.innerHTML))
        alert(`vitoria do ${q4.innerHTML}`)
    else if((q7.innerHTML == "O" && q8.innerHTML == "O" && q9.innerHTML == "O" || q7.innerHTML == "X" && q8.innerHTML == "X" && q9.innerHTML == "X") && (q7.innerHTML==q8.innerHTML && q8.innerHTML==q9.innerHTML))
        alert(`vitoria do ${q7.innerHTML}`)
    else if((q1.innerHTML == "O" && q4.innerHTML == "O" && q7.innerHTML == "O" || q1.innerHTML == "X" && q4.innerHTML == "X" && q7.innerHTML == "X") && (q1.innerHTML==q4.innerHTML && q4.innerHTML==q7.innerHTML))
        alert(`vitoria do ${q1.innerHTML}`)
    else if((q2.innerHTML == "O" && q5.innerHTML == "O" && q8.innerHTML == "O" || q2.innerHTML == "X" && q5.innerHTML == "X" && q8.innerHTML == "X") && (q2.innerHTML==q5.innerHTML && q5.innerHTML==q8.innerHTML))
        alert(`vitoria do ${q2.innerHTML}`)
    else if((q3.innerHTML == "O" && q6.innerHTML == "O" && q9.innerHTML == "O" || q3.innerHTML == "X" && q6.innerHTML == "X" && q9.innerHTML == "X") && (q3.innerHTML==q6.innerHTML && q6.innerHTML==q9.innerHTML))
        alert(`vitoria do ${q3.innerHTML}`)
    else if((q1.innerHTML == "O" && q5.innerHTML == "O" && q9.innerHTML == "O" || q1.innerHTML == "X" && q5.innerHTML == "X" && q9.innerHTML == "X") && (q1.innerHTML==q5.innerHTML && q5.innerHTML==q9.innerHTML))
        alert(`vitoria do ${q1.innerHTML}`)
    else if((q7.innerHTML == "O" && q5.innerHTML == "O" && q3.innerHTML == "O" || q7.innerHTML == "X" && q5.innerHTML == "X" && q3.innerHTML == "X") && (q7.innerHTML==q5.innerHTML && q5.innerHTML==q3.innerHTML))
        alert(`vitoria do ${q7.innerHTML}`)
    else if(j==9)
        alert("deu velha, amigo")
}