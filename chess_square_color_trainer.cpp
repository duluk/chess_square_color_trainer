#include <iostream>
#include <cstdlib>
#include <ctime>

// The following two functions were inspired by ChatGPT-generated functions for
// the Ruby version of this.
std::string
chess_square_color(std::string coord)
{
  int x = (coord[0] - 'a') + 1;
  int y = coord[1] - '1';

  return (x + y) % 2 == 0 ? "light" : "dark";
}

std::string
random_chess_coordinate()
{
  std::srand(std::time(NULL)); 
  int x = rand() % 8;
  int y = rand() % 8;

  return (char)(x + 'a') + std::to_string(y + 1);
}

int main(void)
{
  for (;;)
  {
    std::string coord = random_chess_coordinate();
    std::string guess;

    std::cout << "What color is " << coord << "? ";
    std::cin >> guess;

    // TODO: Add a little validation to the input
    if (guess == "0")
      break;
    else if (guess == chess_square_color(coord)) {
      std::cout << "Correct!" << std::endl;
    } else {
      std::cout << "Wrong you fool!" << std::endl;
    }

    // Newline for separation/cleanliness
    std::cout << std::endl;
  }

  return 0;
}
