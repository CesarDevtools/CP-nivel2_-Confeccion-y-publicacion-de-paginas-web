Algoritmo InvertirCadena
	Definir cadena, cadenaInvertida Como Caracter
	
	cadenaInvertida = ""
	Escribir " Ingrese una palabra"
	Leer cadena
	
	Para i desde Longitud(cadena) hasta 1 Con Paso -1 Hacer
		cadenaInvertida = cadenaInvertida + Subcadena(cadena,i,i)
		
	FinPara
	
	Escribir  "La cadena invertida es: ", cadenaInvertida
	
FinAlgoritmo
