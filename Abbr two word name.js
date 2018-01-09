function abbrevName(name) {
    var abbName = name.split(" ");
    var first = abbName[0].charAt(0).toUpperCase();
    var last = abbName[1].charAt(0).toUpperCase();

    return first + "." + last;


}