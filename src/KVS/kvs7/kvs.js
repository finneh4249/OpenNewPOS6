const kvsInfo = document.querySelector('#kvs-info');
if (kvsInfo) {
    console.log(kvsInfo)
  const statusSpan = kvsInfo.children[1].children[1];
  if (statusSpan.textContent === 'ON') {
    statusSpan.style.color = 'limegreen';
  } else if (statusSpan.textContent === 'OFF') {
    statusSpan.style.color = 'red';
  }
} else {
  console.log("No element with class 'kvs-info' found.");
}