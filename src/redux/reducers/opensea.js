import { initialState } from "../../initialState";
import { filterDuplicateObjects } from "../../utils";

const openseaReducers = (state = initialState.opensea, action) => {
  switch (action.type) {
    case "GET_ASSET":
      return {
        ...state,
        collections: {
          ...state.collections,
          searched: {
            ...state.searched,
            asset: action.searchedAsset,
          },
        },
      };

    case "GET_SNIPED_ASSETS":
      return {
        ...state,
        collections: {
          ...state.collections,
          snipedAssets: action.snipedAssets,
        },
      };

    case "GET_COLLECTION_ASSETS":
      const searchedAssets = filterDuplicateObjects([
        ...state.collections.searched.assets,
        ...action.searchedAssets,
      ]);
      return {
        ...state,
        collections: {
          ...state.collections,
          searched: {
            collection: action.searchedCollection,
            assets: searchedAssets,
          },
        },
      };

    case "REMOVE_COLLECTION_ASSETS":
      return {
        ...state,
        collections: {
          ...state.collections,
          searched: initialState.collections.searched,
        },
      };

    case "GET_USER_DATA":
      return {
        ...state,
        user: {
          ...state.user,
          userData: {
            userDetails: action.userDetails,
            totalAssetsCount: action.totalAssetsCount,
            collectionNames: action.collectionNames,
            collectionContracts: action.collectionContracts,
            userCollections: action.userCollections,
            userActivities: action.userActivities,
          },
        },
      };

    case "GET_USER_ASSETS":
      const mergeAssetsArr = filterDuplicateObjects([
        ...state.user.userAssets,
        ...action.userAssets,
      ]);

      const mergeWithOrders = mergeAssetsArr.map((asset) => {
        const sell_orders = state.user?.assetsOrders?.sell_orders.filter(
          (order) => order.asset.id === asset.id
        );
        const orders = state.user?.assetsOrders?.orders.filter(
          (order) => order.asset.id === asset.id
        );
        return { ...asset, sell_orders, orders };
      });

      const userAssets = filterDuplicateObjects(mergeWithOrders).map(
        (asset) => {
          if (asset.orders.length) {
            asset.orders.forEach((order) => {
              delete order.asset;
            });
          }
          if (asset.sell_orders.length) {
            asset.sell_orders.forEach((order) => {
              delete order.asset;
            });
          }
          return asset;
        }
      );

      return {
        ...state,
        user: { ...state.user, userAssets },
      };

    case "GET_USER_ASSETS_ORDERS":
      const sell_orders = filterDuplicateObjects([
        ...state.user.assetsOrders.sell_orders,
        ...action.user.sell_orders,
      ]);
      const orders = filterDuplicateObjects([
        ...state.assetsOrders.orders,
        ...action.orders,
      ]);
      return {
        ...state,
        user: {
          ...state.user,
          assetsOrders: {
            sell_orders,
            orders,
          },
        },
      };

    case "REMOVE_ORDER_ASSETS":
      return {
        ...state,
        user: { ...state.user, assetsOrders: {} },
      };

    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        user: {
          ...state.user,
          watchLists: [...state.user.watchLists, action.watchListAsset],
        },
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        user: {
          ...state.user,
          watchLists: action.watchListAssets,
        },
      };

    default:
      return state;
  }
};

export default openseaReducers;
