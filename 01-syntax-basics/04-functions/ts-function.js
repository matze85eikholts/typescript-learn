//---here I consider an example from an interview --
function isReactangular(a, b, c) {
    if (Math.pow(c, 2) === (Math.pow(a, 2) + Math.pow(b, 2)))
        return true;
    else
        return false;
}
console.log(isReactangular(3, 4, 5));
