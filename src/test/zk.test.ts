import { expect } from 'chai';
import { DocumentProver, DocumentSignature } from '../zk/proofs/DocumentProver';

describe('ZK Document Signing Tests', () => {
    let mockWallet: any;
    
    beforeEach(() => {
        // Mock wallet for testing
        mockWallet = {
            enable: async () => true,
            getDID: async () => 'did:midnight:test',
            sign: async (hash: Uint8Array) => new Uint8Array([1, 2, 3]),
        };
    });

    it('should generate document signature with proof', async () => {
        const testDocument = new TextEncoder().encode('Test document');
        
        try {
            const signature: DocumentSignature = await DocumentProver.signDocument(
                testDocument,
                mockWallet
            );

            expect(signature).to.have.property('documentHash');
            expect(signature).to.have.property('signature');
            expect(signature).to.have.property('signerDID');
            expect(signature).to.have.property('timestamp');
            
            expect(signature.signerDID).to.equal('did:midnight:test');
            expect(signature.timestamp).to.be.a('number');
            expect(signature.timestamp).to.be.closeTo(Date.now(), 1000);
            
        } catch (error) {
            throw error;
        }
    });

    it('should fail with invalid wallet', async () => {
        const testDocument = new TextEncoder().encode('Test document');
        
        try {
            await DocumentProver.signDocument(testDocument, null);
            expect.fail('Should have thrown error');
        } catch (error: any) {
            expect(error.message).to.equal('Wallet not connected');
        }
    });
}); 