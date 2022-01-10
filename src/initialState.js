import { top500Collections } from "./mockData";

export const initialState = {
  project: {
    token: {
      address: "0x7c8c2804992a90Fe07D31ce459a04B472a5ed3c3",
      details: {},
    },
    collection: {
      address: "0x6069a6C32cf691F5982FEbAe4fAf8a6f3AB2F0F6",
      details: {},
    },
  },
  user: {
    wallet: "",
    balance: 0,
    assets: [],
  },
  opensea: {
    collectionsAddresses: top500Collections,
    collections: {
      snipedAssets: [],
      searched: {
        collection: {},
        assets: [],
        asset: {},
      },
    },
    user: {
      userAssets: [],
      watchLists: [],
      assetsOrders: {
        sell_orders: [],
        orders: [],
      },
      userData: {
        userDetails: {},
        totalAssetsCount: 0,
        userCollections: [],
        collectionNames: [],
        collectionContracts: [],
        userActivities: [],
      },
    },
  },
};
