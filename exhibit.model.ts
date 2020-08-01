export interface Stamp {
    img: string,
    name: string,
    year: number,
    country: string,
}

export type ExhibitModel = {
    item: Stamp,
    id: string,
    catPrice: number,
    currentBid: number,
    isSold: boolean,
    isOnSale: boolean,
    bidderId?: string,
    // for demo:
    bidCount?: number,
}

