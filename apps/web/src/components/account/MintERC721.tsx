import React, { useState } from "react";
import { useAddress, useContractWrite } from "wagmi-lfg";
import { MockERC721__factory, IMOCK721__factory, AccountERC6551__factory } from "web3-config";
import { notify } from "reapop";
import { useTokenStore } from "../../hook/useTokenStore";
import { write } from "fs";


const MintEquipment = () => {
    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    const MOCK721Address = useAddress(MockERC721__factory) as string;

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
        const data = IMOCK721__factory.createInterface().encodeFunctionData(
            "mint",
            [selectedToken, 1]
        )
        mintEquipment({
            args: [MOCK721Address, BigInt(0), data],
            overrides: {
                gasLimit: 1000000,
            }
        });

    }

    return (
        <div className="grid-col-spa">

            <button
                className={`px-4 py-2 text-white rounded-md transition-colors duration-300 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={() => { handleMint() }}
                disabled={isLoading}
            >
                {isLoading ? 'Minting...' : 'Mint Equipment'}
            </button>
        </div>
    );
}

export default MintEquipment;
