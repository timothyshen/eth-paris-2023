# Pixel Rental

Credit to @jonathangus for creating the template

## What are we doing here?
This is a project using ERC4907(rentable NFT) + ERC6551(TBA)to create a rentable NFT wallet account for GameFi(mainly), but other projects in the space can utilize this idea to help break the barrier in mass adoption.

### Currently, we see through a few issues
- Many people claim to be "learners", but they just learn instead of doing practical actions.
  Why? Rug pull, high cost of entrance, token fluctuation, and many more stops many people make the first step.
- Compare with the traditional game industry. We lack the ability to rent an account. Account renting is a huge thing.
  Why? Assets are fundamentally bundled with the account due to the key pair account system. We can't rent out one and only Private Key to others.
- Lack of users and actual down-to-ground utility.
  Why? Working in this space is fascinating for sure, but there are many technical barriers for normal users to understand. Yes, ZK!

### So what do we purpose here?
A rentable account serves objective renting and subjective renting.
A stand-alone solution combines the utility of both NFT and wallet.

The rentable NFT wallet can be seen as two parts
- NFT
- Wallet

We elaborate on adding a module to the NFT to make it rentable(adding the ERC4907 interface)
The wallet helps to isolate the assets and transactions, as all related assets and transactions are bundled with an NFT wallet instead of an NFT holder wallet account. This means transferring the NFT will also transfer the ownership of the wallet. 

## Technology
```
|-\apps
|------\smart-contracts # smart contract folder
|------\web # website frontend
|-\packages # shared config + packages
|------\lint # eslint config folder
|------\tsconfig # typescript config folder
|------\wagmi-lfg # wagmi wrap up folder
|------\web3-config # contract related folder
```
### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup
Install dependencies by running `yarn`

### Development
To run local development run:
```
yarn dev
```

### Build

To build all apps and packages, run the following command:

```
yarn build
```
