import MintToken from "../components/account/MintERC20";
import MintEquipment from "../components/account/MintERC721";
import OwnedNFTs from "../components/account/BalanceERC721";
import OwnedTokens from "../components/account/BalanceERC20";

const Page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-3 gap-4">
                <p className="col-span-3 text-center text-md">
                    Hero Quest
                </p>
                <p className="col-span-3 text-center text-md">
                    For current version you can mint some token and equipment to start
                </p>
                <div className="col-span-3 text-center">
                    <MintToken />
                    <MintEquipment />
                </div>
                <div className="col-span-3">
                    <OwnedTokens />
                </div>
                <div className="col-span-3 text-center">
                    <OwnedNFTs />
                </div>

            </div>
        </div>
    )
}

export default Page;