import React, { useEffect, useState } from 'react';
import { useTokenStore } from '../../hook/useTokenStore';
import { MockERC20__factory } from 'web3-config';
import { useAddress } from 'wagmi-lfg';
import { ethers, providers } from 'ethers';
import TransferERC721 from './TransferERC721';
import TransferERC20 from './TransferERC20';

interface TokenBalance {
    balance: string;
    name: string;
    symbol: string;
    tokenAddress: string;
}

const OwnedTokens = () => {
    const [tokenBalance, setTokenBalance] = useState<TokenBalance>({
        balance: "",
        name: "",
        symbol: "",
        tokenAddress: "",
    });
    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    const MOCK20Address = useAddress(MockERC20__factory) as string;
    console.log("MOCK20Address", MOCK20Address);
    let providersEth: any;
    if (typeof window !== 'undefined') {
        providersEth = new providers.Web3Provider(window?.ethereum);
    }
    const fetchToken = async () => {
        const token = MockERC20__factory.connect(MOCK20Address, providersEth);
        const balance = await token.balanceOf(selectedToken);
        const convertBalanceToNumb = ethers.utils.formatEther(balance);
        setTokenBalance({ balance: convertBalanceToNumb, name: "Mock20Token", symbol: "T20", tokenAddress: MOCK20Address });
    }

    useEffect(() => {
        fetchToken();
    }, []);

    return (
        <div className="flex items-center justify-center bg-white rounded-lg border border-black p-3 m-3">
            <div className="flex items-start justify-between w-full">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <div className="pr-2 text-black text-sm font-semibold">{tokenBalance.name}</div>
                            <div className="text-stone-500 text-xs font-semibold">{tokenBalance.symbol}</div>
                        </div>
                        <div className="">Token Balance: {tokenBalance.balance}</div>
                    </div>
                    <div className="border border-black w-full"></div>
                    <div className="text-black text-xs font-normal">
                        Id lectus donec cursus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus donec cursus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus donec cursus vulputate.
                        Id lectus donec cursus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus donec cursus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lectus donec cursus vulputate.
                    </div>
                </div>
                <div className="flex flex-col ml-7 my-5 items-center justify-center">
                    <TransferERC721 />
                    <TransferERC20 />
                </div>
            </div>
        </div>

    );
}

export default OwnedTokens;
