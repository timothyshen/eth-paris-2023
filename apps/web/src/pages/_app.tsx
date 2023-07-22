import '../globals.css';

import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { init } from '@airstack/airstack-react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY);
const queryClient = new QueryClient();



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <Web3Provider>
          <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <NextLink href="/">
                <p className="font-semibold text-xl tracking-tight">Home</p>
              </NextLink>
            </div>
            <ConnectButton />
          </nav>
          <div>
            <Component {...pageProps} />
          </div>
          <NotificationHandler />
        </Web3Provider>
      </NotificationsProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
