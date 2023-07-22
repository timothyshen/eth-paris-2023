import React, { useEffect, useState } from 'react';
import { useTokenStore } from '../../hook/useTokenStore';
import { MockERC20__factory } from 'web3-config';
import { useAddress } from 'wagmi-lfg';
import { providers } from 'ethers';

interface TokenBalance {
    balance: string;
    name: string;
    tokenAddress: string;
}

const OwnedTokens = () => {
    const [tokenBalance, setTokenBalance] = useState<TokenBalance>({});
    const selectedToken = useTokenStore((s: any) => s.selectedToken);
    const MOCK20Address = useAddress(MockERC20__factory) as string;
    const providersEth = new providers.Web3Provider(window.ethereum);

    const fetchToken = async () => {
        const token = MockERC20__factory.connect(MOCK20Address, providersEth);
        const name = await token.name();
        const balance = await token.balanceOf(selectedToken);

        setTokenBalance({ balance: balance.toString(), name: name, tokenAddress: MOCK20Address });
    }

    useEffect(() => {
        fetchToken();
    }, []);

    return (
        <div>
            <p>Owned Token</p>
            <p>{tokenBalance.name}</p>
            <p>Token Balance: {tokenBalance.balance}</p>
        </div>
    );
}

export default OwnedTokens;
