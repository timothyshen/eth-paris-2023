import gameBaseDeploymentGoerli from './deployments/goerli/GameBaseNFT.json';
import mock20DeploymentGoerli from './deployments/goerli/MockERC20.json';
import mock721DeploymentGoerli from './deployments/goerli/MockERC721.json';
import Account6551DeploymentGoerli from './deployments/goerli/AccountERC6551.json';
export * from './typechain';
import * as _typechain from './typechain';
import { localhost, goerli, gnosisChiado } from 'wagmi/chains';

export const contracts = {
  MockERC20: _typechain.MockERC20__factory.name,
  MockERC721: _typechain.MockERC721__factory.name,
  GameBaseNFT: _typechain.GameBaseNFT__factory.name,
  AccountERC6551: _typechain.AccountERC6551__factory.name,
};

export type AvailableContractNames = keyof typeof contracts;

type OptionalContracts = '';

export type RequiredContracts = Exclude<
  AvailableContractNames,
  OptionalContracts
>;

type PartialRecord<K extends AvailableContractNames, T> = {
  [P in K]?: T;
};

type AddressRecord = PartialRecord<AvailableContractNames, string>;

export const addresses: Record<number, AddressRecord> = {
  // [localhost.id]: {
  //   [contracts.Counter]: '0x000',
  // },
  [goerli.id]: {
    [contracts.MockERC20]: mock20DeploymentGoerli.address,
    [contracts.MockERC721]: mock721DeploymentGoerli.address,
    [contracts.GameBaseNFT]: gameBaseDeploymentGoerli.address,
    [contracts.AccountERC6551]: Account6551DeploymentGoerli.address,
  },
  [gnosisChiado.id]: {
    [contracts.MockERC20]: mock20DeploymentGoerli.address,
    [contracts.MockERC721]: mock721DeploymentGoerli.address,
    [contracts.GameBaseNFT]: gameBaseDeploymentGoerli.address,
    [contracts.AccountERC6551]: Account6551DeploymentGoerli.address,
  },
};

export const getAddress = (
  contract: AvailableContractNames,
  chain: number
): string | void => {
  if (!addresses[chain]) {
    console.warn(`missing chain ${chain} in getAddress`);
    return;
  }

  if (!addresses[chain][contract]) {
    console.warn(
      `missing contract ${contract} in chain ${chain} in getAddress`
    );
    return;
  }

  return addresses[chain][contract];
};
