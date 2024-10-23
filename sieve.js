function sieveOfEratosthenes(n) { 

	// Create boolean array and fill true 
	let prime = new Array(n + 1).fill(true); 
	
	// Make mulltiples of prime number false 
	for (let i = 2; i <= n; ++i) { 
		if (prime[i]) 
			for (j = i * i; j < n + 1; j += i) { 
				prime[j] = false; 
			} 
	} 
	
	// Extract all indexes for true values 
	primeArray = prime.reduce((acc, e, i) => { 
		if (e == true && i >= 2) { 
			acc.push(i); 
		} 
		return acc; 
	}, []); 
	// Return resultant array 
	return primeArray; 
} 

// Input number 
const num = 40; 

// Call function and show output 
console.log("Prime numbers up to "+ num+": "+ sieveOfEratosthenes(num)); 
