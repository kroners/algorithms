# from a string find the largest palidrome

def palindrome(strings):
	length = 0
	strings = strings.split()
	print strings
	for pal in strings:
		print pal
		check = is_palindrome(pal)
		if check:
			if len(pal) > length:
				largest = pal
				length = len(pal)
	if length == 0:
		print "there is no palindrome"
	else:
		print "The largest is ", largest

# A pythonic way to determine if a given value is a palindrome:
# str(n) == str(n)[::-1]
# Explanation:
# We're checking if the string representation of n equals the inverted string representation of n
# The [::-1] slice takes care of inverting the string
# After that, we compare for equality using ==
# source: https://stackoverflow.com/questions/17331290/how-to-check-for-palindrome-using-python-logic

def is_palindrome(n):
	return n == n[::-1]

palindrome("aya hola ecemece godog qwertyuiopoiuytrewq")
palindrome("tell me baby")
palindrome("hello hey hoh")