//1.Hàm mũi tên để tính trung bình của 3 điểm số
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//2.Tính điểm trung bình
//Dữ liệu 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

//Dữ liệu 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

//3.Hàm kiểm tra
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} so với ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} so với ${avgDolphins})`);
    } else {
        console.log('Không có đội nào thắng');
    }
};
checkWinner(avgDolphins1, avgKoalas1); 
checkWinner(avgDolphins2, avgKoalas2); 
