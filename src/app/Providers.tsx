'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider attribute="class" defaultTheme="dark">
                {children}
            </NextUIProvider>
        </QueryClientProvider>
    );
};

export { Providers };
