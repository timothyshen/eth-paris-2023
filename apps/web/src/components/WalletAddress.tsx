import { useContractRead } from "wagmi-lfg";
import { GameBaseNFT__factory } from "web3-config";
import NextLink from "next/link";
import Link from "next/link";
import { useTokenStore } from "../hook/useTokenStore";

const WalletAddress = ({ tokenID }) => {
    const setToken = useTokenStore((state) => state.setToken);

    const { data } = useContractRead(GameBaseNFT__factory, "showTBA", {
        args: [tokenID],
    });

    const handleSetToken = () => {
        setToken(data);
    };

    return (
        <div>
            <p>Account Address:</p>
            <Link href={`/${data}`} onClick={handleSetToken}>
                {data}
            </Link>
            <NextLink href={`https://goerli.etherscan.io/address/${data}`}>
                <p>View on Etherscan</p>
            </NextLink>
        </div>
    );
};

export default WalletAddress;
