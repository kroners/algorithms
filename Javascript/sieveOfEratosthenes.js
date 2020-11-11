function sieveOfEratosthenes(n) {
  let primes = new Array(n + 1);
  primes.fill(true);
  primes[0] = primes[1] = false;

  let sqrtn = Math.ceil(Math.sqrt(n));
  for (let i = 2; i <= sqrtn; i++) {
    if (primes[i]) {
      for (let j = 2 * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

function main() {
  let n = 77;
  let primes = sieveOfEratosthenes(n);
  // console.log(primes);
  for (let i = 2; i <= n; i++) {
    if (primes[i]) console.log(i);
  }
}

main();
