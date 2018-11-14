// Name: handicapjs
// Purpose: Calculates the handicap index according to the USGA guidlines
//
// Input:  Array of scorecard objects, containing the course slope, rating,
// and the round score.
//
// Output: Final handicap index, -1 if it cannot be calculated

// Helper function used to find the lowest number of differntials
// to use for the final handicap index calculation.

function findNumOfDifferentialsToUse(numOfDifferentials) {
  if (numOfDifferentials < 5) {
    return 0;
  }
  switch (numOfDifferentials) {
    case 5:
    case 6:
      return 1;
    case 7:
    case 8:
      return 2;
    case 9:
    case 10:
      return 3;
    case 11:
    case 12:
      return 4;
    case 13:
    case 14:
      return 5;
    case 15:
    case 16:
      return 6;
    case 17:
      return 7;
    case 18:
      return 8;
    case 19:
      return 9;
    default:
      return 10;
  }
}

function getHandicap(scorecards) {
  let differentials = [];

  // Create an array of differentials
  for (let scorecard of scorecards) {
    let differential = (scorecard.score - scorecard.courseRating) * 113;
    differential /= scorecard.slopeRating;
    differentials.push(differential);
  }

  // Sort the differential array low to high
  differentials.sort();

  let numOfDifferentials = findNumOfDifferentialsToUse(differentials.length);
  var avgDifferential = 0.0;

  if (numOfDifferentials === 0) {
    return -1;
  } else {
    // Find average of the lowest numOfDifferentials in differentials array
    for (let i = 0; i < numOfDifferentials; ++i) {
      avgDifferential += differentials[i];
    }

    avgDifferential /= numOfDifferentials;
  }

  // Final Handicap index = average differential multiplied by 0.96
  return avgDifferential * 0.96;
}

module.exports = getHandicap;
