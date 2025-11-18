document.getElementById("calcBtn").addEventListener("click", function () {
    const birthdayInput = document.getElementById("birthday").value;
    const size = document.getElementById("size").value;
    const errorMsg = document.getElementById("errorMsg");
    const resultBox = document.getElementById("resultBox");

    errorMsg.textContent = "";
    resultBox.style.display = "none";

    if (!birthdayInput) {
        errorMsg.textContent = "請先輸入狗狗的生日喔！";
        return;
    }

    const birthday = new Date(birthdayInput);
    const today = new Date();

    if (birthday > today) {
        errorMsg.textContent = "欸欸，生日不能比今天晚啦！";
        return;
    }

    // 計算狗狗年齡（以年為單位）
    const diffTime = today - birthday;
    const dogAgeYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    // DNA 年齡換算
    const dnaAge = 16 * Math.log(dogAgeYears) + 31;

    // 體型年齡 - 線性插值
    const sizeTable = {
        small: [[1, 15], [2, 24], [3, 28], [5, 36], [10, 56], [15, 76]],
        medium: [[1, 15], [2, 24], [3, 28], [5, 36], [10, 60], [15, 83]],
        large: [[1, 12], [2, 22], [3, 31], [5, 42], [10, 75], [15, 96]]
    };

    function interpolate(age, table) {
        for (let i = 0; i < table.length - 1; i++) {
            const [a1, h1] = table[i];
            const [a2, h2] = table[i + 1];

            if (age >= a1 && age <= a2) {
                const ratio = (age - a1) / (a2 - a1);
                return h1 + ratio * (h2 - h1);
            }
        }
        // 超過表格最大值，線性外推
        const [a1, h1] = table[table.length - 2];
        const [a2, h2] = table[table.length - 1];
        const ratio = (age - a1) / (a2 - a1);
        return h1 + ratio * (h2 - h1);
    }

    const sizeAge = interpolate(dogAgeYears, sizeTable[size]);

    // 顯示結果
    document.getElementById("dogAge").textContent = dogAgeYears.toFixed(2);
    document.getElementById("dnaAge").textContent = dnaAge.toFixed(2);
    document.getElementById("sizeAge").textContent = sizeAge.toFixed(2);

    resultBox.style.display = "block";
});
