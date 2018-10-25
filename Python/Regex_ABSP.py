# Pattern matching with regular expression
# Automate the boring stuff with python

def isPhoneNumber(text):
    if len(text) != 12:
        return False
    for i in range(0,3):
        if not text[i].isdecimal():
            return False

    if text[3] != '-':
        return False
    for i in range(4,7):
        if not text[i].isdecimal():
            return False

    if text[7] != '-':
       return False
    for i in range(8, 12):
        if not text[i].isdecimal():
            return False
    return True

print('415-555-4242 is a phone number:')
print(isPhoneNumber('415-555-4242'))
print('Moshi moshi is a phone number:')
print(isPhoneNumber('Moshi moshi'))

# to create a regex from the phone number we can do this
import re

phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
# this variable now contains a regex object
# Regex object's search method, searches the string it is passed for any matches to the regex
# If the pattern is found, the search() method returns a Match object. 
# Match objects have a group() method that will return the actual matched text from the searched string.





