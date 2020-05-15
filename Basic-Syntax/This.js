// This
function This() {
  const that = "This Context in JavaScript";
  function scopeThis(This) {
    return "//23// " + This;
  }
  return scopeThis(that);
}
console.log(This());
