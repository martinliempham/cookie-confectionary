// if(){
// 	let sugar = Cookies.get("sugarCookie");
// }
// else {
// 	let sugar = 0
// }

let sugar = Cookies.get("sugarCookie") || 0;
let chocolate = Cookies.get("chocolateCookie") || 0;
let lemon = Cookies.get("lemonCookie") || 0;

function sugarCounter(){
	sugar++;
	sugar+= "";
	Cookies.set("sugarCookie", sugar);
	console.log(Cookies.get("sugarCookie"))
	if (typeof Cookies.get("sugarCookie")=="string"){
		sugar= Cookies.get("sugarCookie");
	}
}

function chocolateCounter(){
	chocolate++;
	chocolate+= "";
	Cookies.set("chocolateCookie", chocolate);
	if (typeof Cookies.get("chocolateCookie")=="string"){
		chocolate= Cookies.get("chocolateCookie");
	}
}

function lemonCounter(){
	lemon++;
	lemon+= "";
	Cookies.set("lemonCookie", lemon);
	if (typeof Cookies.get("lemonCookie")=="string"){
		lemon= Cookies.get("lemonCookie");
	}
}




function cookieCount() {
  let cookiestotal = Number(sugar) + Number(chocolate) + Number(lemon);
  alert(`${cookiestotal} cookies.`);
}

function reset() {
  Cookies.set("sugarCookie", 0);
  Cookies.set("chocolateCookie", 0);
  Cookies.set("lemonCookie", 0);
  sugar = 0;
  chocolate = 0;
  lemon = 0;
  cookiestotal = 0;
}
