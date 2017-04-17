# inputs: two numbers
# outputs: solution to those two numbers multiplied together
# ex:
# 238 X 13 = 3094
# 
# 119   26
# 59    52
# 29    104
# X 14    208
# 7     416
# 3     832
# 1     1664
# -----------
#       3094
# el algoritmo multiplica y divide 2 pars de numeros hasta q uno llegue a 1. Luego descarta aquel que tiene un valor par (derecha)
# finalmente aplica suma a los demas numeros (izq)

def russian(num1, num2):
	print num1 * num2
	resultado = 0
	while num1 != 1:
		num1 = num1 / 2
		num2 = num2 * 2
		residuo = num1 % 2
		if num1 % 2 != 0:
			resultado = resultado + num2
		print num1, num2, residuo
	print resultado

russian(238, 13)

# another solution
def russian2(a, b):
	x = a; y = b
	z = 0
	while x > 0:
		if x % 2 == 1: z = z + y
		y = y << 1 # shift binary over to left
		x = x >> 1 # shift binary over to right
	return z

# 17 in base 2: 10001 = 17        10001
				# >> 1 			   << 1
				# 1000 = 8 		 100010 = 34