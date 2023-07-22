import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'ERC6551Registry';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const args: any[] = [];
  const deployment = await deploy(name, {
    from: deployer,
    args,
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = ['all', name];
export default func;
