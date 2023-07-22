import React from "react";
import { useAddress, useContractWrite } from "wagmi-lfg";
import { MockERC20__factory, IMOCK20__factory, AccountERC6551__factory } from "web3-config";
import { notify } from "reapop";
import { useTokenStore } from "../../hook/useTokenStore";

const MintToken: React.FC = () => {
    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    const MOCK20Address = useAddress(MockERC20__factory) as string;
    console.log(selectedToken)

    const { write: mintToken, isLoading } = useContractWrite(
        AccountERC6551__factory,
        "executeCall",
        {
            reckless: true,
            address: selectedToken,
            onSuccess: () => {
                notify({
                    title: 'Minted',
                    message: 'Minted successfully',
                    status: 'success',
                    dismissible: true,
                    dismissAfter: 5000,
                });
            },
            onError: (e: Error) => {
                console.error(e);
                notify('Failed Minting', 'error');
            }
        }
    );

    const handleMint = async () => {
        const data = IMOCK20__factory.createInterface().encodeFunctionData(
            "mint",
            [selectedToken, 1]
        );
        console.log(data)
        mintToken({
            args: [MOCK20Address, BigInt(0), data],
        });
    };

    return (
        <div className="grid-col-spa">
            <button
                className={`px-4 py-2 text-white rounded-md transition-colors duration-300 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={handleMint}
                disabled={isLoading}
            >
                {isLoading ? 'Minting...' : 'Mint Token'}
            </button>
        </div>
    );
};

export default MintToken;
