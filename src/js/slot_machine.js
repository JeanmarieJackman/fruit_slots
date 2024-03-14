// Define the symbols and their corresponding payouts
const symbols = ['Cherry', 'Bell', 'Bar', 'Seven', 'Diamond'];
const payouts = {
    'Cherry': 10,
    'Bell': 20,
    'Bar': 30,
    'Seven': 50,
    'Diamond': 100
};

// Define adjusted probabilities for each symbol
const symbolProbabilities = {
    'Cherry': 0.35,
    'Bell': 0.2,
    'Bar': 0.15,
    'Seven': 0.1,
    'Diamond': 0.2
};

// Function to spin the reels
function spin() {
    const spinDuration = 2000; // Duration of the spin animation in milliseconds
    const animationInterval = 100; // Interval between symbol updates during animation in milliseconds
    const numFrames = spinDuration / animationInterval; // Number of frames in the animation

    // Define colors for each symbol
    const symbolColors = {
        'Cherry': 'red',
        'Bell': 'orange',
        'Bar': 'darkgrey',
        'Seven': 'green',
        'Diamond': 'blue'
    };

    const resultElement = document.getElementById('result');
    const reelElements = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];

    const spinAnimation = setInterval(() => {
        for (let i = 0; i < reelElements.length; i++) {
            // Generate random symbol based on adjusted probabilities
            const symbolIndex = getRandomSymbolBasedOnProbability();
            const symbol = symbols[symbolIndex];
            reelElements[i].textContent = symbol;
            reelElements[i].style.color = symbolColors[symbol]; // Update symbol color
        }
    }, animationInterval);

    setTimeout(() => {
        clearInterval(spinAnimation);
        const reel1 = getRandomSymbolBasedOnProbability();
        const reel2 = getRandomSymbolBasedOnProbability();
        const reel3 = getRandomSymbolBasedOnProbability();

        for (let i = 0; i < reelElements.length; i++) {
            const symbol = symbols[i === 0 ? reel1 : i === 1 ? reel2 : reel3];
            reelElements[i].textContent = symbol;
            reelElements[i].style.color = symbolColors[symbol]; // Update symbol color
        }

        // Check for winning combination
        if (reel1 === reel2 && reel2 === reel3) {
            const symbol = symbols[reel1];
            const payout = payouts[symbol];
            resultElement.textContent = `Congratulations! You win ${payout} coins for getting 3 ${symbol}s!`;
        } else {
            resultElement.textContent = "Sorry, you didn't win this time.";
        }
    }, spinDuration);
}

// Helper function to get a random symbol based on adjusted probabilities
function getRandomSymbolBasedOnProbability() {
    const rand = Math.random();
    let cumulativeProbability = 0;
    for (const symbol of symbols) {
        cumulativeProbability += symbolProbabilities[symbol];
        if (rand < cumulativeProbability) {
            return symbols.indexOf(symbol);
        }
    }
    return symbols.length - 1; // If for some reason no symbol is selected, return the index of the last symbol
}
