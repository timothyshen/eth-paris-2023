import { FC } from "react";
import MintCharacter from "./MintCharacter";
import { useAddress } from "wagmi-lfg";
import { GameBaseNFT__factory } from "web3-config";

const MintCharacterView = () => {
    const address = useAddress(GameBaseNFT__factory);

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4">
                <p className="col-span-3 text-center">
                    Welcome to Hero Quest!
                </p>
                <p className="col-span-3 text-center">
                    To start, please Mint a Character
                </p>
                <div className="col-span-3 text-center">
                    <MintCharacter />
                </div>

            </div>
        </div>
    );
}

export default MintCharacterView;