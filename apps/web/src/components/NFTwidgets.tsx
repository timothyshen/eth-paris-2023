import React, { useEffect, useState } from 'react';
import { useNFTsOwnedQuery } from '../hook/useNFTsOwnedQuery';
import RentCharacter from './RentCharacter';
import { GameBaseNFT__factory } from 'web3-config';
import { useContractRead } from 'wagmi-lfg';
import WalletAddress from './WalletAddress';
import Image from 'next/image';

const NFTwidgets = ({ address, type }: { address: string, type: string }) => {
    const { isLoading, error, data } = useNFTsOwnedQuery(address, type);
    const transformTokenIds = (tokenIds: number) => {
        return BigInt(tokenIds).toString()
    }
    const IPFSLinkBase =
        'https://ipfs.io/ipfs/bafkreifd3ypvs22cv2fpvydctb4epl5aw336jqhmhpbo3npom57r72o5j4';
    const IPFSLinkEquip =
        'https://ipfs.io/ipfs/bafybeifzarmhsun6qdg3f5dfkwhw5quff77656lonxqvtuxgpnwsxynqw4';
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-bold mb-2">{item.contractMetadata.name}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Image
                        src={type === "gamebase" ? IPFSLinkBase : IPFSLinkEquip}
                        width={500}
                        height={500}
                        alt={`Token ${transformTokenIds(item.id.tokenId)}`}
                        className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                            Token ID:{' '}
                            <span className="truncate" title={item.id.tokenId}>
                                { }...
                            </span>
                        </span>
                        <span className="text-green-600">Balance: {item.balance}</span>
                    </div>
                    {type === "gamebase" ? <WalletAddress tokenID={item.id.tokenId} /> : <>This is a NFT owned by TBA! I am a equipment</>}
                    {/* {item.error && <p className="text-red-600 mt-2">Error: {item.error}</p>} */}
                    <div>
                        <RentCharacter characterData={item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NFTwidgets;
