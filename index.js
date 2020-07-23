const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const find = array.find(year => year.result === "W")
  return !!find ? find.year : undefined
}