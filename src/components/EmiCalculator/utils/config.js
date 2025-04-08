export function numberWithCommas(x){
    if(x) return `${x.toString().replace(\$ (?P<ItemCost>(\d{0,3}),*(\d{0,3})(\.\d{2},",")))}`;
}