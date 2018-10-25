# -*- coding: utf-8 -*-
# Testing

# Porque hacer Testing
# Para comprender mejor el codigo
# Entender los errores
# Saber que hemos culminado un desarrollo
# Asegurarse que futuros añadidos al codigo no haran que este no compile

def adding(a, b):
	return a + b

def test_adding():
	# con assert puedes hacer las prubeas de forma que el output de la funcion sea el que indiques
	# en este caso se define que el input 3 y 4 deberia dar como resultado 7
	assert adding(3,4) == 7
	# assert adding(3,4) == 5
	# assert adding(33,4) == 7
	return "All Tests Pass for function adding()"
	# pass
	# Al fallar no imprimira el resultado y dara un Assertion Error ya que no se cumple la condicion
print test_adding()

# Otros datos:
# Python's assert statement helps you find bugs more quickly and with less pain.
# Assertions are a systematic way to check that the internal state of a 
# program is as the programmer expected, with the goal of catching bugs. 

class MyDB:
	def __init__(self):
		self._id2name_map = {}
		self._name2id_map = {}

	def add(self, id, name):
		self._name2id_map[name] = id
		self._id2name_map[id] = name
 
	def by_name(self, name):
		id = self._name2id_map[name]
		assert self._id2name_map[id] == name
		return id

dibi = MyDB()
dibi.add(1, "yoyo")
first = dibi.by_name("yoyo")
# si se indica otro nombre , dara error como Keyerror
print first

# Assertions are particularly useful in Python because of Python's powerful and 
# flexible dynamic typing system.

from types import *

class Almacen:

	def __init__(self):
		self._cant2prenda = {}
		self._prenda2cant = {}

	def add(self, cantidad, ropa):
		# importando types, se puede comprobar el tipo de dato que se brinda
		assert type(cantidad) is IntType, "id is not an integer: %r" % cantidad
		assert type(ropa) is StringType, "name is not a string: %r" % ropa
		self._prenda2cant[ropa] = cantidad
		self._cant2prenda[cantidad] = ropa
		return "Added data correctly"

prueba = Almacen()
print prueba.add(3,"jeans")
# https://wiki.python.org/moin/UsingAssertionsEffectively

