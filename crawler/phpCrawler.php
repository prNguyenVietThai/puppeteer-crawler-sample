<?php

$url = 'http://localhost:3000/';
$agent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.63 Safari/537.36";
$curl = curl_init();
// オプションのセット
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 1);
curl_setopt($curl, CURLOPT_USERAGENT, $agent);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION,true);//リダイレクトをたどる
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);//証明書の検証を行わない
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);//curl_execの結果を文字列で返す
curl_setopt($curl, CURLOPT_ENCODING, "gzip");

// 実行
$res1 = curl_exec($curl);
$res2 = curl_getinfo($curl);

if($res2["http_code"] !== 200) {
    var_dump("Failed to craw page with status ".$res2["http_code"]);// 終了
    curl_close($curl);
    exit();
}

// 終了
curl_close($curl);

$html = substr($res1, $res2['header_size']);    // 取得したデータ(JSONなど)

var_dump($html);
