import { useState } from "react";
import { useContractWrite } from "wagmi-lfg";
import { GameBaseNFT__factory } from "web3-config";

const RentCharacter = ({ characterData }) => {
    const [expires, setExpires] = useState(0);
    const [user, setUser] = useState('');
    const { write: rentCharacter, isLoading } = useContractWrite(
        GameBaseNFT__factory,
        "setUser",
        {
            reckless: true,
        },

    );
    const handleRent = async (tokenId: number, user: string, expires: number) => {
        await rentCharacter({
            args: [tokenId, user, expires]
        });

    }

    return (
        <div>
            <input
                className="border-2 border-gray-500"
                type="number"
                placeholder="Enter number of days"
                onChange={(e) => setExpires(parseInt(e.target.value))}
            />
            <input
                className="border-2 border-gray-500"
                type="text"
                placeholder="Enter address"
                onChange={(e) => setUser(e.target.value)}
            >
            </input>

            <button
                className={`px-4 py-2 text-white rounded-md transition-colors duration-300 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={() => handleRent(
                    characterData.tokenId,
                    user,
                    expires
                )}
                disabled={isLoading}
            >
                {isLoading ? 'Renting...' : 'Rent'}
            </button>
        </div>
    );

}

export default RentCharacter;
