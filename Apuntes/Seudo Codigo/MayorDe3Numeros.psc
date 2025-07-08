Algoritmo MayorDe3Numeros
	Definir num1, num2, num3, mayor Como Real
	
	Escribir "introduce el primer numero"
	Leer num1
	Escribir "introduce el segundo numero"
	Leer num2
	Escribir "introduce el tercer numero"
	Leer num3
	
	mayor = num1
	
	si num2 > mayor Entonces
		mayor = num2
	FinSi
	
	si num3 > mayor Entonces
		mayor = num3
	FinSi
	
	
	Escribir "El numero mayor es: ", mayor 
	
	
FinAlgoritmo
