import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'GameBaseNFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const erc6551Registry = await deployments.get('ERC6551Registry');
  const account = await deployments.get('AccountERC6551');
  const IPFSLink =
    'https://ipfs.io/ipfs/bafkreifd3ypvs22cv2fpvydctb4epl5aw336jqhmhpbo3npom57r72o5j4';
  const { deploy } = deployments;
  const args: any[] = [erc6551Registry.address, account.address, IPFSLink];
  const deployment = await deploy(name, {
    from: deployer,
    args: args,
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
  console.log('complete');
};

func.tags = ['all', name];
export default func;
