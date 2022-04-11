upper = 100;
lower = 1;

function sieve(i) {
  // EAGE CASES
  if (i == 0) {
    return true;
  }
  if (i == 1) {
    return true;
  }
  if (i == 2) {
    return false;
  }
  for (let index2 = 2; index2 <= Math.sqrt(i); index2++) {
    if (i % index2 == 0) {
      return true;
    }
  }
  return false;
}
for (let index = lower; index <= upper; index++) {
  if (!sieve(index)) {
    console.log(index);
  }
}
