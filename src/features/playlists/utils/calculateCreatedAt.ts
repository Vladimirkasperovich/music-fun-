export const calculateCreatedAt = (isoString: string): string => {
    const now = new Date();
    const created = new Date(isoString);

    const diffMs = now.getTime() - created.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) return `Created ${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    if (diffMonths > 0) return `Created ${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    if (diffDays > 0) return `Created ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    if (diffHours > 0) return `Created ${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffMin > 0) return `Created ${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;

    return 'Created just now';
};
