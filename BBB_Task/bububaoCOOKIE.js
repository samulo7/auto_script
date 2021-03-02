//独立COOKIE文件     ck在``里面填写，多账号换行

let bububaotokenVal = `
   //ly
  {"imei": "865166022090610","ini": "25","version": "18","tokenstr": "43F7876A4F29C53D5B3CA9D5D530283G1612665750","store": "0","platform": "1","Content-Type": "application/x-www-form-urlencoded","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.2; xiaomi 10 Build/N2G47O)","Host": "bububao.duoshoutuan.com","Connection": "close","Accept-Encoding": "gzip, deflate","Content-Length": "0"}
  // zxf
  {"imei": "865166022090610","ini": "25","version": "18","tokenstr": "1AF1971906164B677FF8A2B96530348G1612663771","store": "0","platform": "1","Content-Type": "application/x-www-form-urlencoded","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.2; xiaomi 10 Build/N2G47O)","Host": "bububao.duoshoutuan.com","Connection": "close","Accept-Encoding": "gzip, deflate","Content-Length": "0"}
  //流星
  {"imei": "865166022090610","ini": "25","version": "18","tokenstr": "95230100FE2A362A15B4BF4E8530320G1612665258","store": "0","platform": "1","Content-Type": "application/x-www-form-urlencoded","User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.2; xiaomi 10 Build/N2G47O)","Host": "bububao.duoshoutuan.com","Connection": "close","Accept-Encoding": "gzip, deflate","Content-Length": "0"}
`



let bububaocookie = {
    bububaotokenVal: bububaotokenVal,

}

module.exports = bububaocookie
