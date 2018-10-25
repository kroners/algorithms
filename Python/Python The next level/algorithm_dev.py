def algo_dev(problem):
	correct = False
	while not correct or not fast_enough(running):
		# do some stuff
		return correct


# Difference between args and kwargs
## : * args (arguments) && ** kwargs (key word arguments)
def F(*args, **kwargs):
	for arg in args:
		print arg
	print kwargs

camelido = "nato"
F(camelido)
F(camelido, hola="Billy")
# en ammbos casos se imprime un diccionario q esta vacio o con valores indicados

def G(deporte, ropa="camisa"):
	print deporte, ropa

deporte = "futbol"
G(deporte)
G(deporte, ropa="zapato")
# en este escenario se asigna el nuevo valor al key ropa. Se puede prescindir de usar ropa como variable porque ya tiene un valor inicial.

# se debe agrupar a los args y kwargs por separado. Si al inicio se tiene un argumento, y luego sigue un keyword, no puede seguir un argumento:
# ejemplo:

def J(hair, eyes='green', blood):
	print hair, eyes

hair = 'brown'
blood_type='o-'
J(hair, blood_type)
# se produce un error de sintaxis: non-default argument follows default argument
# esto se debe a que la var blood_type no sabe ni asignarse a 'eyes' o a blood
# por ello se debe separar los args de los kwargs

# LOS ASTERISCOS en args y kwargs quieren decir que, si hay uno de ellos, es que esta esperando q el valor que sigue sea una lista
# KMientas el segundo, que es doble asterisco, espera a que el valor que sigue sea un diccionario
