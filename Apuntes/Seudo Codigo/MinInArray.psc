Algoritmo MinInArray
		Definir numeros Como Real
		Dimension numeros[5]
		
		
		Definir minimo Como real
		Para i Desde 1 Hasta 5 Hacer
			Escribir "Ingresa un número " , i, ":" 
			Leer numeros[i]
		FinPara
		
		minimo = numeros[1]
		Para i Desde 2 Hasta 5 Hacer
			Si numeros[i] < minimo Entonces
				minimo = numeros[i]
			FinSi
		FinPara
		
		Escribir "El menor del array es: ", minimo
		
	

	
FinAlgoritmo
