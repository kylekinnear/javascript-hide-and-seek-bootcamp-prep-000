function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10)) + n
    }
}

function deepestChild() {
  var nodeList = document.querySelectorAll('div#grand-node div')
  return nodeList[nodeList.length-1]
}
