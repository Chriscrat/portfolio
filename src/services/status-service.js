export const getMaintenanceStatus = async () => {
    const res = await fetch('/api/status');
    return res.json();
};
