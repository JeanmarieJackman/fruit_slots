// Define the symbols and their corresponding payouts
const symbols = ['Cherry', 'Bell', 'Bar', 'Seven', 'Diamond'];
const payouts = {
    'Cherry': 10,
    'Bell': 20,
    'Bar': 30,
    'Seven': 50,
    'Diamond': 100
};

// Function to spin the reels
function spin() {
    // Generate random numbers for each reel
    const reel1 = Math.floor(Math.random() * symbols.length);
    const reel2 = Math.floor(Math.random() * symbols.length);
    const reel3 = Math.floor(Math.random() * symbols.length);

    // Display the symbols generated for each reel
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Reels: ${symbols[reel1]} - ${symbols[reel2]} - ${symbols[reel3]}<br/>`;

    // Check for winning combination
    if (symbols[reel1] === symbols[reel2] && symbols[reel2] === symbols[reel3]) {
        const symbol = symbols[reel1];
        const payout = payouts[symbol];
        resultElement.innerHTML += `Congratulations! You win ${payout} coins for getting 3 ${symbol}s!`;
    } else {
        resultElement.innerHTML += "Sorry, you didn't win this time.";
    }
}
