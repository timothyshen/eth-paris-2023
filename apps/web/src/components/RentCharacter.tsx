import { useState } from "react";
import { useContractWrite } from "wagmi-lfg";
import { GameBaseNFT__factory } from "web3-config";
import { ethers } from "ethers";

const RentCharacter = ({ characterData }) => {
    const [expires, setExpires] = useState(0);
    const [user, setUser] = useState('');



    const { write: rentCharacter, isLoading } = useContractWrite(
        GameBaseNFT__factory,
        "setUser",
        {
            reckless: true,
        }
    );

    const handleRent = () => {
        const bigIntValue = BigInt(parseInt(characterData.id.tokenId, 16));
        try {
            rentCharacter({
                args: [bigIntValue, "0x735f2B735c7226f8F1fB5A1443FaA6Fe6D557402", expires],
                overrides: {
                    gasLimit: 1000000,
                }
            });
            console.log("rented character");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <input
                className="border-2 border-gray-500"
                type="Date"
                placeholder="Enter number of days"
                value={expires}
                onChange={(e) => setExpires(
                    e.target.valueAsNumber)}
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
