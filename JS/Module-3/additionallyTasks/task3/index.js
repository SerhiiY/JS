const str = String(prompt('Enter the sentence'));

function checkForSpam(string) {
  if(string.match(/spam/i) || string.match(/sale/i)) { // Если в строке есть слово spam или sale (вне зависимости от регистра), то
    return true;
  }else{
    return false;
  }
}
console.log(checkForSpam(str));
// Вызовы функции для проверки
console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
