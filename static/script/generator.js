/*
const r = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7,
    'I': 8,
    'J': 9
};
let m = '';
let p = [];

Array.prototype.forEach.call(document.getElementsByTagName('th'), e=>{
    if (/\[.,.\]/.test(e.innerHTML)) {
        p.push(e.innerText.replace('[', '').replace(']', '').split(','));
    }
});

let q = document.getElementsByClassName('form-control');
for (let i = 0; i < 3; i++) {
    q[i].value = m[10 * (p[i][1] - 1) + r[p[i][0]]];
}
*/

const matitem = document.getElementsByClassName('matitem');

function gen() {
    let scr = "(()=>{const r={'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8,'J':9};";
    scr += "let m='";
    Array.prototype.forEach.call(matitem, e=>{
        scr += e.value;
    });
    scr += "';let p=[];";
    scr += "Array.prototype.forEach.call(document.getElementsByTagName('th'),e=>{if(/\\[.,.\\]/.test(e.innerHTML)){p.push(e.innerText.replace('[','').replace(']','').split(','));}});";

    scr += "let q=document.getElementsByClassName('form-control');for(let i=0;i<3;i++){q[i].value=m[10*(p[i][1]-1)+r[p[i][0]]];}";
    
    scr += ")()";
    document.getElementById('output').innerText = scr;
}