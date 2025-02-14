# Midnight Lace Wallet Integration

Reference implementation from Midnight Lace Wallet v1.2.5.

## Key Files
- `js/background.js` - Core wallet functionality
- `js/27.js` - Key generation and address formatting
- `js/*.wasm` - WebAssembly modules for cryptographic operations

## Address Format
```
privateKey|0300publicKeyExtendedKey
```

Example:
```
88154b67ad4de96e49c165f233b35acf9394cb33fc6e7d4b81fbbfc8a5a7cc68|0300af9d1cd4f80fa2db5f525538bf6601ad4c523a0be3836d9eebae30ca548846581b391976cc21331874ded8dd0b5998ca5f8b25ed48e04b8e
```
