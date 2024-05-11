'use client';

import { useEffect, useState } from 'react';
import { debounce } from 'next/dist/server/utils';
import { string } from 'prop-types';

function getBreakpoint(width) {
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

    function getSize() {
        return isClient
            ? { width: window.innerWidth, height: window.innerHeight, breakpoint: getBreakpoint(window.innerWidth) }
            : { width: undefined, height: undefined, breakpoint: 'xs' };
    }
    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        const handleResize = debounce(() => {
            setWindowSize({
                width: window?.innerWidth,
                height: window?.innerHeight,
                breakpoint: getBreakpoint(window?.innerWidth),
            });
        }, 200);

        window.addEventListener('resize', handleResize);
        return () => window?.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export { useWindowSize };
