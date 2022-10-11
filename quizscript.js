/*
  関数pressedBtnは次の処理を行う
  (1) getElementById() メソッドでform要素全体を取得して変数targetに格納する
  (2) getElementById() メソッドでp要素全体を取得して変数reportに格納する
  (3) 問で選ばれた選択肢のvalue属性の値をv1とv2に格納する
  (4) v1とv2を比較演算子を用いて比較し判定結果を出力する
*/
function pressedBtn(){
  // 入力用にform要素全体を取得して変数targetに代入
  target = document.getElementById('quizForm');
  // 出力用にp要素全体を取得して変数reportに代入
  report = document.getElementById('quizReport');
  // value属性の価を変数ｖ1と変数ｖ２に代入
  v1 = target.radios1.value;
  v2 = target.radios2.value;
console.log(v1,v2); //チェックのためにｖ１、ｖ２をwebコンソールに出力

  // 得点0点から始める(変数pntに0を代入)
  pnt = 0;

　// 問1が正解か不正解か判定
  if (v1=='q1one') { //正解1選択
     pnt = pnt + 5;
     q1m ='問１は正解です';
  } else if (v1=='q1two') { //不正解2選択
    q1m ='問１はおしいです';
  } else if (v1=='q1three') { //不正解3選択
    q1m ='問１は不正解です';
  } else { //どれでもない
    q1m ='どの選択肢も選ばれていません';
  }

  // 問２が正解か不正解か判定
  if (v2=='q2two') { //正解2選択
     pnt = pnt + 5;
     q2m = '問2は正解です';
  } else if (v2=='q2one') { //不正解1選択
     q2m = '問2の選択肢は早すぎます';
  } else if (v2=='q2three') { //不正解3選択
     q2m = '問2の選択肢は遅すぎます';
  } else { //どれでもない
     q2m ='どの選択肢も選ばれていません';
    }

    // レポートの文字列の結合
  result = pnt + '点でした。<br>' + q1m + '<br>' + q2m;

  // 結果表示部分に出力する
  report.innerHTML = result;
  console.log('クイズが判定されました',pnt+'点です');
  // 第８回はここから書く
  if( pnt == 10 ){
    resout=result + '<br>全問正解おめでとうございます<br>';
    //ここに繰り返し文（for文）を書く
    for ( x = 1; x <= 20; x=x+1 ) {
     console.log('x='+ x );
   //ここに書いた文が繰り返される;
    result = result + '&#9786;'
   }
   report.innerHTML = result;
  }
}
