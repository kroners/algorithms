# Creating a 10 x 10 array filling it randomly with letters C or N
# using random and list methods

import random

def TenByTen (count, *args):
	for x in range(0,count):
		# print x+1, "line"
		line = ""
		for y in range(0,count):
			options = list(args)
			letter = random.choice(options)
			line += letter
		print line

TenByTen(10, "C", "N")