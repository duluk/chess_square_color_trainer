#include <iostream>
#include <string>
#include <algorithm>
#include <cstdlib>
#include <ctime>

// More succinct. The basic idea is that if the values of the coordinates add
// up to an even number, then the square is dark. If we see the letters as
// (a=1,b=2,c=3,etc), then we can simply add the two together if it is even
// it's dark. The bitwise AND with 1 will evaluate to 1 for even and 0 for odd.
// I leave that as an exercise for the reader.
std::string
chess_square_color(std::string coord)
{
  return (coord[0] + coord[1]) & 1 ? "light" : "dark";
}

std::string
random_chess_coordinate()
{
  std::srand(std::time(NULL)); 
  int x = rand() % 8;
  int y = rand() % 8;

  return (char)(x + 'a') + std::to_string(y + 1);
}

void
downcase(std::string &s)
{
  std::transform(s.begin(), s.end(), s.begin(), ::tolower);
}

int main(void)
{
  std::string guess;
  std::string coord;

  for (;;)
  {
    if (coord == "")
    {
      coord = random_chess_coordinate();
    }

    std::cout << "What color is " << coord << "? ";
    std::cin >> guess;

    downcase(guess);

    if (guess == "0")
      break;
    else if (guess != "light" && guess != "dark")
    {
      std::cout << "Invalid input. Must be either light or dark." << std::endl << std::endl;
      continue;
    }
    else if (guess == chess_square_color(coord))
    {
      std::cout << "Correct!" << std::endl;
    }
    else
    {
      std::cout << "Wrong you fool!" << std::endl;
    }

    coord = "";

    // Newline for separation/cleanliness
    std::cout << std::endl;
  }

  return 0;
}
