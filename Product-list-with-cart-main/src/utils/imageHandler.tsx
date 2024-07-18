export function getImageUrl(name : string) 
{
    return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
}

export function getIconUrl(name : string) 
{
    return new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
}