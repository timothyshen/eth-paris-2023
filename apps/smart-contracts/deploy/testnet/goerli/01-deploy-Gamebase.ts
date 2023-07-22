import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'GameBaseNFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const args: any[] = [
    '0x02101dfB77FDE026414827Fdc604ddAF224F0921',
    '0x2d25602551487c3f3354dd80d76d54383a243358',
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
