import React from "react";
import { useAddress, useContractWrite } from "wagmi-lfg";
import { useAccount } from "wagmi";
import { MockERC721__factory, IERC721__factory, AccountERC6551__factory } from "web3-config";
import { notify } from 'reapop';
import { useTokenStore } from "../../hook/useTokenStore";


const TransferERC721 = () => {
    const { address } = useAccount();
    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    const MOCK20Addr = useAddress(MockERC721__factory) as string;

    const { write: mintEquipment, isLoading } = useContractWrite(
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
            onError: (e) => {
                console.error(e);
                notify('Failed Minting', 'error');
            }
        }
    );
    const handleMint = async () => {
        const data = IERC721__factory.createInterface().encodeFunctionData(
            "transferFrom",
            [selectedToken, address, 1]
        )
        try {
            mintEquipment({
                args: [MOCK20Addr, BigInt(0), data],
                overrides: {
                    gasLimit: 1000000,
                }
            });
        } catch (e) {
            console.error(e);
            notify('Failed Minting', 'error');
        }
    }
    return (
        <div className="w-full">
            <button
                className={`text-xs p-1 m-1 text-white rounded-md transition-colors duration-300 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={() => { handleMint() }}
                disabled={isLoading}
            >
                {isLoading ? 'Transfer...' : 'Transfer Equipment'}
            </button>
        </div>
    );
}

export default TransferERC721;