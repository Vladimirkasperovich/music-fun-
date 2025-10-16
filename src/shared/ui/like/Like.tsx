import { type FC, useState } from 'react';
import {
    LIKE_COLOR_ACTIVE,
    LIKE_COLOR_INACTIVE,
    LIKED_REACTION,
    UNLIKED_REACTION,
} from '@/shared/ui/like/constants.ts';

interface Props {
    onClick?: () => void;
    width: number;
    height: number;
}

export const Like: FC<Props> = ({ onClick, height, width }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked((prevState) => !prevState);
        onClick?.();
    };

    return (
        <button type="button" onClick={toggleLike}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill={isLiked ? LIKE_COLOR_ACTIVE : LIKE_COLOR_INACTIVE}
                    d={isLiked ? LIKED_REACTION : UNLIKED_REACTION}
                    fillOpacity="0.5"
                />
            </svg>
        </button>
    );
};
