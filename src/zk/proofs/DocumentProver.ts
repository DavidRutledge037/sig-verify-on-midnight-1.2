export interface DocumentSignature {
    documentHash: Uint8Array;
    signature: Uint8Array;
    signerDID: string;
    timestamp: number;
}

export class DocumentProver {
    private static readonly CIRCUIT_ID = 'DocumentSigner';

    static async signDocument(
        document: Uint8Array,
        wallet: any  // Will be properly typed when SDK is available
    ): Promise<DocumentSignature> {
        try {
            if (!wallet) {
                throw new Error('Wallet not connected');
            }

            // 1. Hash document
            const documentHash = await this.hashDocument(document);

            // 2. Get DID from wallet
            const did = await wallet.getDID();

            // 3. Sign document hash
            const signature = await wallet.sign(documentHash);

            // 4. Create proof
            return {
                documentHash,
                signature,
                signerDID: did,
                timestamp: Date.now()
            };
        } catch (error) {
            console.error('Document signing failed:', error);
            throw error;
        }
    }

    private static async hashDocument(document: Uint8Array): Promise<Uint8Array> {
        // TODO: Implement Poseidon hash when SDK is available
        return new Uint8Array();
    }
} 