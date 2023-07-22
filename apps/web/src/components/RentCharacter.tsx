import { useState } from "react";
import { useContractWrite } from "wagmi-lfg";
import { GameBaseNFT__factory } from "web3-config";

const RentCharacter = ({ characterData }) => {
    const [expires, setExpires] = useState('');
    const [user, setUser] = useState('');

    const { write: rentCharacter, isLoading } = useContractWrite(
        GameBaseNFT__factory,
        "setUser",
    );

    const handleRent = async () => {
        const tokenId = characterData.id.tokenId;
        const bigNumTokenId = BigInt(tokenId);
        const bigNumExpires = BigInt(expires);
        try {
            await rentCharacter({
                args: [bigNumTokenId, user, bigNumExpires]
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <input
                className="border-2 border-gray-500"
                type="number"
                placeholder="Enter number of days"
                value={expires}
                onChange={(e) => setExpires(e.target.value)}
            />
            <input
                className="border-2 border-gray-500"
                type="text"
                placeholder="Enter address"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />

            <button
                className={`px-4 py-2 text-white rounded-md transition-colors duration-300 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={() => handleRent()}
                disabled={isLoading}
            >
                {isLoading ? 'Renting...' : 'Rent'}
            </button>
        </div>
    );
}

export default RentCharacter;
