import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'MockERC721';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: ["https://ipfs.io/ipfs/bafybeifzarmhsun6qdg3f5dfkwhw5quff77656lonxqvtuxgpnwsxynqw4"],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = ['all', name]
export default func;
