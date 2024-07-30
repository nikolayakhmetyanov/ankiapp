'use client';

import { useEffect, useState } from 'react';
import { debounce } from 'next/dist/server/utils';

function getBreakpoint(width: number) {
    if (width >= 576 && width < 768) {
        return 'sm';
    }
    if (width >= 768 && width < 992) {
        return 'md';
    }
    if (width >= 992 && width < 1200) {
        return 'lg';
    }
    if (width >= 1200 && width < 1400) {
        return 'xl';
    }
    if (width >= 1400) {
        return 'xxl';
    }
    return 'xs';
}

const useWindowSize = () => {
    const isClient = typeof window === 'object';
    const DEFAULT_BREAKPOINT = 'xs';

    const getWindowSizeObject = (): { width: number | undefined; height: number | undefined; breakpoint: string } => {
        const width = isClient ? window.innerWidth : undefined;
        const height = isClient ? window.innerHeight : undefined;
        const breakpoint = isClient ? getBreakpoint(window.innerWidth) : DEFAULT_BREAKPOINT;
        return { width, height, breakpoint };
    };

    const [windowSize, setWindowSize] = useState(getWindowSizeObject);

    const handleResize = debounce(() => {
        setWindowSize(getWindowSizeObject());
    }, 200);

    useEffect(() => {
        if (!isClient) {
            return;
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export { useWindowSize };
