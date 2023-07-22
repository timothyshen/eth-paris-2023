import { useContractRead } from "wagmi-lfg"
import { GameBaseNFT__factory } from "web3-config"


const WalletAddress = ({ tokenID }) => {

    const { data } = useContractRead(
        GameBaseNFT__factory,
        "showTBA",
        {
            args: [tokenID],
        }
    )

    return (
        <div>
            <p>Account Address: {data}</p>
        </div>
    )
}

export default WalletAddress;