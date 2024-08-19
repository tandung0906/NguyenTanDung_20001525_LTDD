// Dữ liệu 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];
// Dữ liệu Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];
// Dữ liệu Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}
const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);
const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);
const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`Dolphins thắng với điểm trung bình ${dolphinsAvg.toFixed(1)}!`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`Koalas thắng với điểm trung bình ${koalasAvg.toFixed(1)}!`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`Hòa! Cả hai đội đều có điểm trung bình ${dolphinsAvg.toFixed(1)}.`);
    } else {
        console.log("Không có đội nào thắng do không đạt điểm tối thiểu 100.");
    }
}
determineWinner(dolphinsAvg1, koalasAvg1);
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);