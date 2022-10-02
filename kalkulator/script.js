function suma(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    a = parseFloat(a);
    b = parseFloat(b);
    
    var wynik = document.getElementById("wynik")
    wynik.value = a + b
    
}


function roznica(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    a = parseFloat(a);
    b = parseFloat(b);
    
    var wynik = document.getElementById("wynik")
    wynik.value = a - b
}


function iloczyn(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    a = parseFloat(a);
    b = parseFloat(b);
    
    var wynik = document.getElementById("wynik")
    wynik.value = a * b
}


function iloraz(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    a = parseFloat(a);
    b = parseFloat(b);
    
    var wynik = document.getElementById("wynik")
    wynik.value = a / b
}
