import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'AccountERC6551';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const args: any[] = [];
  const deployment = await deploy(name, {
    from: deployer,
    args,
    log: true,
  });
  console.log(deployment.address);

  // deployments.log(`npx hardhat verify --network ${network.name} ${deployment.address} ${args.map(arg => `"${arg}"`)}`)
};

func.tags = ['all', name];
export default func;
