##: AKA = Mediation and Duplation Method

# Inputs -> two numbers
# Output -> the solution to those two numbers
# 			multiplied together using Russion Peasent Algorithm

# 17 in base 2: 10001 = 17			10001
# 				>>1 				 <<1
# 			   1000 = 8				100010 = 34

# se puede aplicar el time para calcular el tiempo de ejecucion
import time

# is like a hash table
# in this case a dictionary that needs a key
CACHE = {}


def russian(a,b):
	key = (a,b)
	if key in CACHE:
		z = CACHE[key]
	else:
		print 'Not in CACHE'
		x = a; y = b 		## Semicolon -> Compund statement
		z = 0				## Acumulator
		while x > 0: 		## While loops begin
			if x % 2 == 1: z = z + y
			y = y << 1
			x = x >> 1
		CACHE[key] = z
	return z

def test_russian():
	# calculando tiempo de ejecucion
	start_time = time.time()
	print russian(357,16)
	print "Russian Algorithm took %f seconds" % (time.time()-start_time)
	# probando el CACHE
	start_time = time.time()
	print russian(357,16)
	print "Russian Algorithm took %f seconds" % (time.time()-start_time)
	assert russian(357,16) == 5712

test_russian()