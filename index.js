function getFirstSelector(selector) {
  const answer = document.querySelector(selector)
  return answer
}

function nestedTarget () {
  const answer = document.querySelector('#nested .target')
  return answer
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild () {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep
}
