# you can represent numbers in binary format by starting them with 0b
print 0b1,    #1
print 0b10,   #2
print 0b11,   #3
print 0b100,  #4
print 0b101,  #5
print 0b110,  #6
print 0b111,  #7
print 0b1000, #8
print 0b1001, #9
print 0b1010, #10
print 0b1 + 0b11
print 0b11 * 0b11

# you can use functions to represent numbers in other formats
print bin(5)
print oct(25)
print hex(156)

# "int()" method has a second argument; the base the first argument is in. Then it will return the string casted to a base-10 int
print int("10",2)
print int("0b100",2)
print int(bin(5),2)

# you can bit shift numbers with ">>" and "<<"
print 0b1100
print 0b1
print 0b1100 >> 2
print 0b1 << 2

# you can use bitwise operators on binary numbers
print bin(0b1110 & 0b101)	#AND
print bin(0b1110 | 0b101)	#OR
print bin(0b111 ^ 0b1010)	#XOR
print bin(~0b1)				#NOT

# using a bitmask can help with bitwise operations, e.g. determining if a bit is turned on or not
def check_bit4(input):
    mask = 0b1000
    desired = input & mask
    if desired > 0:
        return "on"
    else:
        return "off"
		
a = 0b10111011
mask = 0b100
desired = a | mask
print bin(desired)

a = 0b11101110
mask = 0b11111111
desired = a ^ mask
print bin(desired)

def flip_bit(number, n):
    mask = (0b1 << n - 1)
    result = (number ^ mask)
    return bin(result)