
let hideAddressEvent = (accouts) => {
    return accouts.substr(0,6)+'...'+accouts.substr(accouts.length-4,accouts.length)
}
export {
    hideAddressEvent
}
