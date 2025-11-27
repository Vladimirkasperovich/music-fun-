import { type FC, useState } from 'react';

interface PlayStopButtonProps {
    className?: string;
}
export const PlayStopButton: FC<PlayStopButtonProps> = ({ className }) => {
    const [togglePlayer, setTogglePlayer] = useState(false);
    const togglePlayerHandler = () => setTogglePlayer((prevState) => !prevState);
    return (
        <button onClick={togglePlayerHandler} type="button" className={className}>
            <svg
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
            >
                <g filter="url(#filter0_d_24796_9103)">
                    <circle cx="52" cy="48" r="36" fill="#FF38B6" />
                    {!togglePlayer ? (
                        <path
                            d="M65.2866 48.5121C66.1519 48.0263 66.1519 46.8119 65.2866 46.3262L45.8179 35.3966C44.9526 34.9108 43.871 35.518 43.871 36.4895V58.3488C43.871 59.3203 44.9526 59.9275 45.8179 59.4417L65.2866 48.5121Z"
                            fill="black"
                        />
                    ) : (
                        <>
                            <rect x="44" y="36" width="6" height="24" fill="black" />
                            <rect x="56" y="36" width="6" height="24" fill="black" />
                        </>
                    )}
                </g>
                <defs>
                    <filter
                        id="filter0_d_24796_9103"
                        x="0"
                        y="0"
                        width="104"
                        height="104"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_24796_9103"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_24796_9103"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </button>
    );
};
