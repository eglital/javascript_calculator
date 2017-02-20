$(document).ready(function(){
  var entries = [];
  var total = 0;
  var temp = '';
  var operators = ['+', '-', '*', '/'];

  $('button').on("click", function(){
    var val = $(this).text();

    //if click on number, add it to temp and display. Also check and don't let add zeroes in the beginning of a number
    if (!isNaN(val)){
      if (val === '0' && temp.length === 0){
        temp = '';
      } else {
      temp += val;
      $('#line').val(temp);
      }
    }
    //if click on dot, check if there is no dot already, then add it to temp and display
    else if (val === '.' && temp.indexOf(val) === -1){
      //also check if it's a first thing in temp, then add 0 in the front
      if (temp.length === 0){
        temp += '0';
      }
      temp += val;
      $('#line').val(temp);
    }
    //if click on AC, clear everything, display 0
    else if (val === 'AC'){
      entries = [];
      temp = '';
      total = 0;
      $('#line').val(total);
    }
    //if click on CE, clear display
    else if (val === 'CE'){
      temp = '';
      total = 0;
      $('#line').val(temp);
    }
    //if click on operator
    else if (operators.indexOf(val) !== -1){
      if (temp !== '') {
      entries.push(temp);
      temp = '';
      entries.push(val);
      } else if (entries.length > 0 && operators.indexOf(entries[entries.length-1]) !== -1){
        entries[entries.length-1] = val;
      } else if (entries.length === 0 && total !== 0){
        entries.push(total);
        entries.push(val);
        total = 0;
      } else if (entries.length === 0 && val === '-'){
        entries.push('0');
        entries.push(val);
      }
    }
    //if click equal, do the calculation
    else if (val === '='){
      entries.push(temp);
      total = eval(entries.join(''));
      temp = total;

      $('#line').val(temp);
      temp = '';
      entries = [];

    }
  });

});