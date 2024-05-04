'use client';
import { useEffect, useState } from 'react';
import { debounce } from 'next/dist/server/utils';

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
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(window.innerWidth),
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                breakpoint: getBreakpoint(window.innerWidth),
            });
        }, 200);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export { useWindowSize };
