
function takeANumber(array, name) {
  var linePosition = array.length + 1;
  array.push(name);
    return "Welcome, " + name + ". You are number " + linePosition + " in line.";
  }

function nowServing(array){
  if (array.length === 0)
  return "There is nobody waiting to be served!"
  else
  return array[0]
  array.shift([0])
}
