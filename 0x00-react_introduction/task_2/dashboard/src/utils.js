export function getFullYear(){
    const currentYear = new Date().getFullYear();
    return currentYear;
}

export function getFooterCopy(isIndex){
    const space = ' ';
    if (isIndex){
        return `${space}Holberton School`;
    } 
    return `${space}Holberton School main dashboard`;
}

export function getLatestNotification(){
    return '<strong>Urgent requirement</strong> - complete by EOD';
}
