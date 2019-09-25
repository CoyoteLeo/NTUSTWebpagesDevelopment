function parse() {
    var score = parseFloat(document.getElementById("score").value);
    if (isNaN(score))
        document.getElementById('result').innerHTML = "請先輸入分數好嗎 嘖嘖";
    else if (score >= 60)
        document.getElementById('result').innerHTML = "唉唷 還不錯喔";
    else
        document.getElementById('result').innerHTML = "加油好ㄇ";
}