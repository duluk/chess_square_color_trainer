# Chess Square Color Trainer

This script will drill the user in which color a randomly generated chess
coordinate is. The idea is to be able to visualize the chess board to better
perform calculations for tactics and positions.

Doing this sort of training without looking at the chessboard, for instance on
a website, ideally further facilitates seeing the chess board in your mind's
eye.

Currently the 'training' occurs through trial and error.

Future improvements:
1. Add a --train option which will somehow show the coordinate and color on the
   screen. I'm not sure how I want to implement it though.
1. Track which ones have been asked and periodically ask them again, with
   emphasis on the ones that were guessed incorrectly.
