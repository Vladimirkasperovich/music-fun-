import { type FC, useState } from 'react';
import {
    DISLIKE_COLOR_ACTIVE,
    DISLIKE_COLOR_INACTIVE,
    DISLIKE_REACTION,
    UNDISLIKE_REACTION,
} from '@/shared/ui/dislike/constants/constants.ts';

interface DislikeProps {
    onClick?: () => void;
    width: number;
    height: number;
}
export const Dislike: FC<DislikeProps> = ({ width, height, onClick }) => {
    const [isDisliked, setIsDisliked] = useState(false);
    const toggleDislike = () => {
        setIsDisliked((prevState) => !prevState);
        onClick?.();
    };

    return (
        <button type="button" onClick={toggleDislike}>
            <svg
                width={width}
                height={height}
                aria-label="dislike"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d={isDisliked ? DISLIKE_REACTION : UNDISLIKE_REACTION}
                    fill={isDisliked ? DISLIKE_COLOR_ACTIVE : DISLIKE_COLOR_INACTIVE}
                    fillOpacity="0.5"
                />
            </svg>
        </button>
    );
};
