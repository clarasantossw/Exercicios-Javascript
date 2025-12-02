const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

const btnP1 = document.getElementById("btnP1");
const btnP2 = document.getElementById("btnP2");
const btnP3 = document.getElementById("btnP3");

btnP1.addEventListener("click" , function(){
    p1.textContent = "Paragrafo um alterado com sucesso!";
});

btnP2.addEventListener("click" , function(){
    p2.textContent = "Paragrafo dois alterado com sucesso!";
});

btnP3.addEventListener("click" , function(){
    p3.textContent = "Paragrafo tres alterado com sucesso!";
});


