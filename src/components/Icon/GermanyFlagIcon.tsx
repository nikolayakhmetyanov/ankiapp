const GermanyFlagIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none">
            <g clipPath="url(#a)">
                <g clipPath="url(#b)">
                    <rect width="22" height="16" fill="#F93939" rx="2" />
                    <path fill="#FFDA2C" fillRule="evenodd" d="M0 11h23v5H0v-5Z" clipRule="evenodd" />
                    <path fill="#151515" fillRule="evenodd" d="M0 0h23v5H0V0Z" clipRule="evenodd" />
                </g>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h22v16H0z" />
                </clipPath>
                <clipPath id="b">
                    <rect width="22" height="16" fill="#fff" rx="2" />
                </clipPath>
            </defs>
        </svg>
    );
};

export { GermanyFlagIcon };
