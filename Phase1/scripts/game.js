//1回目のセル押下なのか2回目なのか判断
var flg = true;
//表の連想配列
var victoryList =[];
//相手のイベントか自分のイベントか
var inputList = ["○","✖︎"];

// ゲーム盤のマス目クリック時に、以下の関数を実行
function onClick(link){
    
    //連想配列のキーが一致しない場合ここで折り返し
    if (victoryList[$(link).parent().attr('id')]) return;
    choiceItem = flg ?"○":"✖︎";
    //タップしたセルに挿入
    $(link).html(choiceItem);
    inputList[flg ? 0:1];
    //セル押下時毎回フラグ変更
    flg = !flg;
    //表追加
    victoryList[$(link).parent().attr('id')] = $(link).parent().text()
    Judgment(choiceItem);
        
}
//勝ち負けの判別処理
function Judgment(choiceItem){
    var victoryDatas = victoryData(choiceItem);
    Object.keys(bordeList).forEach(function(key) {
        var val = this[key]; // this は obj
        console.log(val);
        if(victoryList[val[0]] == victoryDatas[key][val[0]] && 
        victoryList[val[1]] == victoryDatas[key][val[1]] && 
        victoryList[val[2]] == victoryDatas[key][val[2]]){

            //アラート表示
            alert(choiceItem == "○" ? "勝利！":"負け！");
            //動的処理
            $("#victory").html(choiceItem == "○" ?　"勝敗:あなたの勝ち":"勝敗:あなたの負け");
            //３秒後にリロード
            setTimeout("location.reload()",3000);
        }
    }, bordeList);
}

$(function() {
    // 指定ボタンを押下すると処理を開始する
    $("#update").on("click", function() {
        //ページ更新
        location.reload();
    });

})
