import { ethers } from "ethers";
import { notify } from "reapop";
import { useContractWrite } from 'wagmi-lfg';
import { GameBaseNFT__factory } from "web3-config";

const MintCharacter = () => {
    const { write: mintCharacter, isLoading } = useContractWrite(
        GameBaseNFT__factory,
        "mint",
        {
            reckless: true,
        },

    );

    const handleMint = async () => {
        try {
            await mintCharacter({
                overrides: {
                    value: ethers.utils.parseEther('0.1'),
                },
            });
            notify({
                title: 'Minted',
                message: 'Minted successfully',
                status: 'success',
                dismissible: true,
                dismissAfter: 5000,
            });
        } catch (error) {
            console.error('Error while minting:', error);
            if (error.message.includes('insufficient funds')) {
                notify({
                    title: 'Error',
                    message: 'Insufficient funds to complete the transaction.',
                    status: 'error',
                    dismissible: true,
                    dismissAfter: 5000,
                });
            } else {
                notify({
                    title: 'Error',
                    message: `Error while minting: ${error.message}`,
                    status: 'error',
                    dismissible: true,
                    dismissAfter: 5000,
                });
            }
        }
    };

    return (
        <div className="grid-col-spa">
            <p>Mint Character to start</p>
            <button
                className={`px-4 py-2 text-white rounded-md transition-colors duration-300 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={handleMint}
                disabled={isLoading}
            >
                {isLoading ? 'Minting...' : 'Mint'}
            </button>
        </div>
    );
}

export default MintCharacter;
