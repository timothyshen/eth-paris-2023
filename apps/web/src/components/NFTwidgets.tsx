import React, { useEffect, useState } from 'react';
import { useNFTsOwnedQuery } from '../hook/useNFTsOwnedQuery';
import RentCharacter from './RentCharacter';
import { GameBaseNFT__factory } from 'web3-config';
import { useContractRead } from 'wagmi-lfg';

const NFTwidgets = ({ address }: { address: string }) => {
    const [nftAddresses, setNftAddresses] = React.useState<{ [tokenId: string]: string }>({});
    const { data } = useNFTsOwnedQuery(address);
    const nftData = data?.ownedNfts;


    const { data: characterData } = useContractRead(
        GameBaseNFT__factory,
        'showTBA',
        {
            args: [0],
        }
    );



    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nftData?.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-bold mb-2">{item.contractMetadata.name}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <img
                        src={item.media[0]?.raw} // Assuming the media array has at least one item
                        alt={`Token ${index}`}
                        className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                            Token ID:{' '}
                            <span className="truncate" title={item.id.tokenId}>
                                {item.id.tokenId.slice(0, 8)}...
                            </span>
                        </span>
                        <span className="text-green-600">Balance: {item.balance}</span>
                    </div>
                    <p>account Address: {}</p>
                    {item.error && <p className="text-red-600 mt-2">Error: {item.error}</p>}
                    <div>
                        <RentCharacter characterData={item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NFTwidgets;