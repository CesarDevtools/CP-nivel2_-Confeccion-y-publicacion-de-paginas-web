Algoritmo SecuenciaFibonacci
	Definir n, a, b, siguiente Como Entero
	a = 0
	b = 1
	
	Escribir " Ingresa el número de terminos de Fibonacci"
	Leer n
	
	Escribir "Secuencia Fibonacci"
	Para i Desde 1 Hasta n Hacer
		Escribir a 
		siguiente = a + b
		a = b
		b = siguiente
	FinPara
	
	
FinAlgoritmo
