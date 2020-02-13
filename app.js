// źródło: http://benalexkeen.com/autofilling-forms-with-javascript/

// function autoFill() {
//     document.getElementById('input1').value = "My Text Input";
//     document.getElementById('input2').value = "Dropdown3";
 
//     var radioElements = document.getElementsByName("input3");

//     for (var i=0; i<radioElements.length; i++) {
//       if (radioElements[i].getAttribute('value') == 'Radio2') {
//         radioElements[i].checked = true;
//       }
//     }
//   }

  function autoFill2() {
    document.querySelector(".input4").value = "Kocham Myszkę";
  }

  function autoFill3() {
    document.querySelector(".input5").value = "Ponad Życie!!!";
}

function eraseContent() {
    document.querySelector(".input4").value = "";
    document.querySelector(".input5").value = "";
}