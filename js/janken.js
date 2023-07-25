function janken(myHand){

    // じゃんけんの手を格納する変数（配列）の用意
    let handArray = ['グー','チョキ','パー'];

    // じゃんけんの勝敗の文字列を格納する変数（配列）の用意
    let resultArray = ['あいこです','あなたの負けです','あなたの勝ちです']

    // プレイヤーの手の決定
    // HTML側から引数として渡される
    console.log('プレイヤーの手は：' + handArray[myHand])


    // コンピュータの手の決定
    // ランダムに手を決める
    let rand = Math.floor (Math.random() * 3);
    // console.log(rand);
    console.log('コンピュータの手は：' + handArray[rand]);

    // 勝敗判定
    // if文で
    // 勝敗を入れる変数を用意
    let result;

    // 勝敗判定
    // if (myHand === rand) {
    //     result = 0;
    // } else if ((myHand === 0 && rand ===2) || (myHand === 1 && rand === 0) || (myHand === 2 && rand === 1)) {
    //     result = 1;
    // } else if ((myHand === 0 && rand ===1) || (myHand === 1 && rand === 2) || (myHand === 2 && rand === 0)) {
    //     result = 2;
    // }

    let c = (myHand - rand + 3) % 3;
    if (c === 0){
        result = 0;
    } else if (c === 1){
        result = 1;
    } else if (c === 2){
        result = 2;
    }



    // HTML側に勝敗を表示する
    console.log(resultArray[result]);

    // 表示したい場所のHTMLの要素を取得
    const janken_result = document.querySelector('#janken-result');
    console.log(janken_result);

    // 取得したHTML要素のコンテンツ部分を置き換え
    janken_result.textContent = resultArray[result];


}