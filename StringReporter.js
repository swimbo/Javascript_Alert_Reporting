

var user_typing = prompt("Type a single word here","ALL CAPS PLEASE...").toLowerCase()

if(user_typing != null){
  alert(user_typing.toUpperCase())

  alert("Hey, no need to SHOUT!" + " " + "Simply saying" + " " + user_typing + " " + "would have been fine!")

  alert("By the way, did you know your word was " + user_typing.length + " characters long?")
}
