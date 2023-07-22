import { FC } from "react";
import MintCharacter from "./MintCharacter";
import { useContractRead, useAddress } from "wagmi-lfg";
import { GameBaseNFT__factory } from "web3-config";
import { useQuery } from "@tanstack/react-query";
import { TokensQuery } from "../query";

const MintCharacterView = () => {
    const address = useAddress(GameBaseNFT__factory);
    // const { data, loading, error } = useQuery(TokensQuery, variables, { cache: false });

    const { data: characterData } = useContractRead(
        GameBaseNFT__factory,
        "showTBA",
        {
            args: [0],
        }
    );



    return (
        <div className="flex justify-center items-center h-screen">
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
                <div className="col-span-3 text-center">
                    <p>Character Name: {characterData}</p>
                </div>
            </div>
        </div>
    );
}

export default MintCharacterView;