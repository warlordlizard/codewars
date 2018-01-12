function validateUsr(username) {
  res =  /^[a-z0-9\_]{4,15}$/.test(username) 
  return res
}
