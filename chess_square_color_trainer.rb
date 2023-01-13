#!/usr/bin/env ruby

# These two methods were generated by ChatGPT, rather brilliantly I think.

# Note from me: the AI didn't include '+ 1' for the x coordinate, which messed
# up the calculation - if we assume a,c,e,g are 'odd' numbers and odd with odd
# == dark. An odd number + odd number is an even number. IOW, `a` needs to be 1
# not 0, then the odd/even test works correctly.

# Convert the letter to a number using ASCII values, then check whether the
# number is even or odd. An even number should be light and odd, dark. See
# above comment.
def chess_square_color(coordinate)
  x = (coordinate[0].ord - 'a'.ord) + 1
  y = coordinate[1].to_i - 1
  (x + y) % 2 == 0 ? "light" : "dark"
end

def random_chess_coordinate
  letters = ('a'..'h').to_a
  x = letters.sample
  y = rand(1..8)
  "#{x}#{y}"
end

puts "This game will test your knowledge of what color each square of a chess board"
puts "is. Doing this without looking at a chess board will help visualize the"
print "board in your mind.\n\n"
print "Enter 0 to quit.\n\n"

while true
  coord = random_chess_coordinate

  print "What color is #{coord}? "
  guess = gets.chomp.downcase

  if guess == '0'
    break
  elsif not (guess == 'light' or guess == 'dark')
    puts "Invalid response. Valid responses are light or dark."
  end

  if guess == chess_square_color(coord)
    puts "Correct!"
  else
    puts "Wrong you fool!"
  end

  # Newline for separation and cleanliness
  print "\n"
end