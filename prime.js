upper = 10000;
lower = 1;
class Prime {
  constructor() {
    this.know_prime = [];
  }
  TestPrime(num) {
    if (num < 2) {
      return false;
    }
    // check all knows primes
    for (const prime of this.know_prime) {
      if (num < prime) {
        continue;
      }
      // boring prime check
      if (num % prime == 0) {
        return false;
      }
      // Liar Numbers  check
      if ((Math.pow(prime, num) - num) % num == 0) {
        return false;
      }
    }
    // check the rest up to sqrt
    for (let index2 = 2; index2 <= Math.sqrt(num); index2++) {
      if (num % index2 == 0) {
        return false;
      }
    }
    this.know_prime.push(num);
    return true;
  }
}

let px = new Prime();
for (let index = lower; index <= upper; index++) {
  if (px.TestPrime(index)) {
    console.log(index);
  }
}
