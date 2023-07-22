import MintToken from "../components/account/MintERC20";
import MintEquipment from "../components/account/MintERC721";

const Page = () => {
    return (
        <div>
            <p>Hero Quest</p>
            <MintToken />
            <MintEquipment />
        </div>
    )
}

export default Page;