#!/usr/bin/env python3

import random

# These functions were inspired by Ruby functions generated by ChatGPT.
# A more succinct way, found in the Ruby and C++ versions would be:
# `return "light" if (ord(cord[0]) + ord(coord[1])) & 1 == 1 else "dark"`
def chess_square_color(coord):
    x = (ord(coord[0]) - ord('a')) + 1
    y = int(coord[1]) - 1
    return "light" if (x + y) % 2 == 0 else "dark"

def random_chess_coordinate():
    x = random.randint(0, 7)
    y = random.randint(0, 7)
    return chr(x + ord('a')) + str(y + 1)

coord = ""
while True:
    if coord == "":
        coord = random_chess_coordinate()

    guess = input("What color is " + coord + "? ").lower()

    if guess == "0":
        break
    elif not (guess == "light" or guess == "dark"):
        print("Invalid answer. Must be light or dark.")
        continue
    elif guess == chess_square_color(coord):
        print("Correct!")
    else:
        print("Wrong you fool!")

    coord = ""

    # Add newline for separation/cleanliness
    print("")
