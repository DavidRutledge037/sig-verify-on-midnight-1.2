import { MidnightLace } from '../core/wallet/MidnightLace.js';

async function setupWallet() {
    try {
        console.log('Connecting to Midnight Lace wallet...');
        await MidnightLace.connect();
        
        console.log('Getting wallet address...');
        const address = await MidnightLace.getAddress();
        
        console.log('Requesting funds...');
        await MidnightLace.requestFunds(address);
        
        console.log('Checking balance...');
        await MidnightLace.getBalance();
        
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
            if (error.message.includes('not found')) {
                console.log('\nPlease follow these steps:');
                console.log('1. Install Chrome browser version 119 or later');
                console.log('2. Go to https://github.com/input-output-hk/lace/releases');
                console.log('3. Download and install the Midnight Lace wallet extension');
                console.log('4. Set up your wallet following the extension prompts');
                console.log('5. Run this script again');
            }
        }
    }
}

setupWallet(); 