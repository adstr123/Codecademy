# open a file with "open([file_name, open_mode])"
my_file = open("output.txt", "r+")	# w = write-only, r = read-only, r+ = read/write, a = append

# write to a file with "wrie(data_to_be_written)"
my_list = [i**2 for i in range(1,11)]
my_file = open("output.txt", "r+")

for item in my_list:
    my_file.write(str(item) + "\n")

my_file.close()	# close all files at the end to ensure they are written to properly

# read from a file with "read()"
my_file = open("output.txt", "r")

print my_file.read()
my_file.close()

# read individual lines with ".readline()"
file = open("output.txt", "w")
file.write("I'm the first line of the file!\n")
file.write("I'm the second line.\n")
file.write("Third line here, boss.\n")
file.close()

my_file = open("output.txt", "r")
print my_file.readline()
print my_file.readline()
print my_file.readline()
my_file.close()

# auto-close files by using "with open([file_name], [open_mode]) as [variable]"
with open("text.txt", "w") as textfile:
	textfile.write("Success!")