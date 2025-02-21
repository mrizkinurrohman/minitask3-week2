// dense ranking , sistem ranking
// nilai tertinggi menjadi rank 1
// nilai yg sama mendapat rank yang sama
// nilai beda mendapat rank selanjutnya

// memiliki 2 parameter

// output berupa rank nilai yang masuk array of objek

// bandingin nilai terbesar di input 1
// // bandingin input 2 dengan nilai input 1
const denseRanking = (currentRank, newValues) => {
  let score = [...new Set(currentRank)].sort((a, b) => b - a);
  const result = newValues.map((el) => {
    while (score.length && el >= score[score.length - 1]) {
      score.pop();
    }
    return score.length + 1;
  });
  console.log(result);
};

denseRanking([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
// denseRanking([100, 90, 90, 80, 75, 60], [50, 66, 77, 90, 102]);
