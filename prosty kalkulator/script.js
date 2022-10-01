document.write("Podaj dwie liczby, a nastepnie wybierz dzialanie, jakie chcesz, zeby zostalo wykonane")

var a = prompt("Pierwsza liczba: ")
var b = prompt("Druga liczba: ")

document.write("</br>Liczba a: " + a + "</br>Liczba b: " + b)

var dzialanie = prompt("Wybierz, jakie dzialanie chcesz wykonac 1.Dodawanie 2.Odejmowanie 3.Mnozenie 4.Dzielenie")

if( dzialanie == 1 ){

    a = parseFloat(a);
    b = parseFloat(b);
    var wynik = a+b;

    document.write("</br>Wynik dodawania to " + wynik)
}

if( dzialanie == 2 ){

    a = parseFloat(a);
    b = parseFloat(b);
    var wynik = a-b;

    document.write("</br>Wynik odejmowania to " + wynik)
}

if( dzialanie == 3 ){

    a = parseFloat(a);
    b = parseFloat(b);
    var wynik = a*b;

    document.write("</br>Wynik mnozenia to " + wynik)
}

if( dzialanie == 4 ){

    a = parseFloat(a);
    b = parseFloat(b);
    var wynik = a/b;

    document.write("</br>Wynik dzielenia to " + wynik)
}