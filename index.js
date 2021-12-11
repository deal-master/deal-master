function oneClickAction() {
    var code = document.body.appendChild(document.createElement("input"));
    code.value = document.getElementById("wolt-code").innerHTML;
    code.focus();
    code.select();
    document.execCommand('copy');
    code.parentNode.removeChild(code);
    document.getElementById('wolt').scrollIntoView();
    alert("Code copied! 👍");
    let openWolt = confirm('We are redirecting you to Wolt, so you can get your credits!😋🍟');
    if (openWolt) {
      goToWolt()
    }
  }

function copyToClipboard() {
    var code = document.body.appendChild(document.createElement("input"));
    code.value = document.getElementById("wolt-code").innerHTML;
    code.focus();
    code.select();
    document.execCommand('copy');
    code.parentNode.removeChild(code);
    document.getElementById('wolt').scrollIntoView();
    alert("Code copied! 👍");
}

function goToWolt() {
  document.getElementById('wolt').scrollIntoView();
  window.open("https://wolt.com", '_blank');
}

// 🍔🍕🍟💶
