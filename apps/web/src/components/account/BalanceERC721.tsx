import React from 'react'
import { useTokenStore } from '../../hook/useTokenStore'
import NFTwidgets from '../NFTwidgets'

const OwnedNFTs = () => {

    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    console.log(selectedToken)
    return (
        <div>
            <NFTwidgets address={selectedToken} type='' />
        </div>
    )
}

export default OwnedNFTs