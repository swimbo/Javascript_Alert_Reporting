

var user_typing = prompt("Type a single word here","ALL CAPS PLEASE...").toLowerCase()

if(user_typing != null){
  // The word they entered, verbatim
  alert(user_typing.toUpperCase() + " But I'm totally cheating and have no idea how to match the case exactly. #AARGH!")

  // How many characters are in it (length property)
  alert("By the way, did you know your word was " + user_typing.length + " characters long?")
}

  // What the third character is (charAt)
  alert("The third character is " + user_typing.charAt(2))
  // The word in lowercase (toLowerCase)
  alert("Lowercase: " + user_typing.toLowerCase())
  // The word in uppercase (toUpperCase)
  alert("Uppercase: " + user_typing.toUpperCase())
  // The word in a sentence
  alert("Example sentence: " + "Hey, no need to SHOUT!" + " " + "Simply saying" + " " + user_typing + " " + "would have been fine!")

  // The subword from the 2nd to the 4th character, inclusive (substring)
  alert("subword: " + user_typing.substring(1,4))
