import { useAddress, useContractWrite } from "wagmi-lfg";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { MockERC20__factory, IMOCK20__factory, AccountERC6551__factory } from "web3-config";
import { notify } from 'reapop';
import { useTokenStore } from "../../hook/useTokenStore";


const transferERC20 = (transferTo: string) => {

    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    const MOCK20Addr = useAddress(MockERC20__factory) as string;

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
        const data = IMOCK20__factory.createInterface().encodeFunctionData(
            "transfer",
            [transferTo, ethers.utils.parseEther('1')]
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

export default transferERC20;