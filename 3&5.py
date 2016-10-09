# Values between 100 and 4000000 divisible by 3 or 5 but not both.

numbers = []
for x in range(100, 4000001):
	if x%5 and x%3:
		pass
	else:
		if x%3 or x%5:
			numbers.append(x)
		else:
			pass
print len(numbers)