# Censoring words
import random

def censor(word, string):
	for x in word:
		if x in 'aeiuo' or x in 'AEIOU':
			word = word.replace(x, string)
		print x
	print word

censor('shit', '$')