import { MidnightLace } from './core/wallet/MidnightLace.js';

async function main() {
    try {
        // Connect to wallet
        await MidnightLace.connect();
        
        // Get wallet address
        const address = await MidnightLace.getAddress();
        console.log('Wallet address:', address);
        
        // Get balance
        const balance = await MidnightLace.getBalance();
        console.log('Wallet balance:', balance);
        
        // Example message signing
        const message = new TextEncoder().encode('Hello Midnight!');
        const signature = await MidnightLace.signMessage(message);
        console.log('Message signature:', Buffer.from(signature).toString('hex'));
        
    } catch (error) {
        console.error('Error:', error.message);
        if (error.message.includes('not found')) {
            console.log('Please install the Midnight Lace wallet extension from:');
            console.log('https://github.com/input-output-hk/lace/releases');
        }
    }
}

main(); 