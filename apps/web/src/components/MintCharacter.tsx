import { FC } from "react";
import { useAccount } from "wagmi";
import { useContractRead, useContractWrite } from 'wagmi-lfg';
import { GameBaseNFT__factory } from "web3-config";

const MintCharacter: FC = () => {
    const { address: userAddress } = useAccount();

    const {
        waitForTxResult,
        write: mint,
        isLoading,
        disabled,
    } = useContractWrite(GameBaseNFT__factory, 'mint', {
        onErrorMessage: (err) => `Error: ${err.message}`,
        reckless: true,
    });
    return (
        <div>
            {isLoading && 'Loading...'}
            <button
                disabled={disabled} onClick={() => mint()}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 ${className}`}

            >
                {!disabled ? 'Mint Character' : 'cant work'}
            </button>
        </div>
    );
}