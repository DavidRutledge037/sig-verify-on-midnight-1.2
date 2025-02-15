import { MidnightLace } from '../core/wallet/MidnightLace.js';

async function getWalletAddress() {
    try {
        await MidnightLace.connect();
        const address = await MidnightLace.getAddress();
        console.log('Your Midnight wallet address:', address);
        console.log('\nUse this address at: https://faucet.testnet.midnight.network');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
    }
}

getWalletAddress(); 