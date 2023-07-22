import React, { useState } from "react";
import { ethers } from "ethers";
import { notify } from "reapop";
import { useAccount } from "wagmi";
import { useContractWrite } from 'wagmi-lfg';
import { GameBaseNFT__factory } from "web3-config";
import { useNFTsOwnedQuery } from "../hook/useNFTsOwnedQuery";
import NFTwidgets from "./NFTwidgets";

const MintCharacter = () => {
    const [nftData, setNftData] = useState([]);
    const user = useAccount();
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
                    value: ethers.utils.parseEther('0.001'),
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
            <NFTwidgets address={user.address} />
        </div>
    );
}

export default MintCharacter;
