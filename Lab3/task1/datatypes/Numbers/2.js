alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3
alert( 1.35.toFixed(20) ); // 1.35000000000000008882
alert( 6.35.toFixed(20) ); // 6.349999999999999644

//How to fix?
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
alert(Math.round(1.35*10)/10);