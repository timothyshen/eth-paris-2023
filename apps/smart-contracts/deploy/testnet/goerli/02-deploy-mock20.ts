import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'MockERC20';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log('deploying mock20');
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: [],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = ['all', name];
export default func;
