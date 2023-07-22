import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'MockERC721';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const IPFSLink =
    'https://ipfs.io/ipfs/bafkreifd3ypvs22cv2fpvydctb4epl5aw336jqhmhpbo3npom57r72o5j4';
  const deployment = await deploy(name, {
    from: deployer,
    args: [IPFSLink],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

func.tags = ['all', name];
export default func;
