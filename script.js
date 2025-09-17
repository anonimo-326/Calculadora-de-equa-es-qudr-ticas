function calcular(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let delta = b**2-4*a*c
    if (delta >= 0){
        let x1 = ((b*(-1))+Math.sqrt(delta))/(2*a);
        let x2 = ((b*(-1))-Math.sqrt(delta))/(2*a);
        if (x1 < x2){
            document.getElementById('label').innerHTML = `x = {${x1}, ${x2}}`;
        }
        if (x1 > x2){
            document.getElementById('label').innerHTML = `x = {${x2}, ${x1}}`;
        }
        else{
            document.getElementById('label').innerHTML = `x = ${x1||x2}`
        }
    }
    else{
        document.getElementById('label').innerHTML = 'A equação não tem resolução.';
    }
}
