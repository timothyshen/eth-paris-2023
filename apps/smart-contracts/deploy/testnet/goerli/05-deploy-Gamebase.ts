import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'GameBaseNFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const erc6551Registry = await deployments.get('ERC6551Registry');
  const account = await deployments.get('AccountERC6551');
  const { deploy } = deployments;
  const args: any[] = [
    '0x8515ca0dec371e640eACCFc306093CFF7EE46789',
    '0x8D2729D9807E9FdD7d648BD3045c39B80aB2E5c7',
  ];
  const deployment = await deploy(name, {
    from: deployer,
    args: args,
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
  console.log('complete');
};

func.tags = ['all', name];
export default func;
