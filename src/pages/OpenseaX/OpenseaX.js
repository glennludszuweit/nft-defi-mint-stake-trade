import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import api from "../../redux/api/opensea";
import {
  getUserAssets,
  getUserAssetsOrders,
  removeOrderAsset,
  getAsset,
  getUserData,
  removeCollectionAssets,
} from "../../redux/actions/opensea";
import Loading from "../../components/Loading/Loading";
import SearchFilter from "./SearchFilter/SearchFilter";
import Search from "./Search/Search";
import Buy from "./Buy/Buy";
import Sell from "./Sell/Sell";
import Offers from "./Offers/Offers";
import Auction from "./Auction/Auction";
import Assets from "./Assets/Assets";
import Asset from "./Asset/Asset";
import Browser from "./Browser/Browser";
import Dashboard from "./Dashboard/Dashboard";
import Snipe from "./Snipe/Snipe";

import { useStyles } from "./styles";

const OpenseaX = ({ seaport, web3Address, account }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (state) => state.opensea.user.userData.userDetails
  );
  const userAssets = useSelector((state) => state.opensea.user.userAssets);
  const userActivities = useSelector(
    (state) => state.opensea.user.userData.userActivities
  );
  const userCollections = useSelector(
    (state) => state.opensea.user.userData.userCollections
  );
  const collectionNames = useSelector(
    (state) => state.opensea.user.userData.collectionNames
  );
  const totalAssetsCount = useSelector(
    (state) => state.opensea.user.userData.totalAssetsCount
  );
  const watchLists = useSelector((state) => state.opensea.user.watchLists);
  const snipedAssets = useSelector(
    (state) => state.opensea.collections.snipedAssets
  );
  const searchedAssets = useSelector(
    (state) => state.opensea.collections.searched.assets
  );
  const searchedAsset = useSelector(
    (state) => state.opensea.collections.searched.asset
  );
  const searchedCollection = useSelector(
    (state) => state.opensea.collections.searched.collection
  );

  const [loading, setLoading] = useState(true);
  const [openSideNav, setOpenSideNav] = useState({
    left: false,
    right: false,
  });
  const [reviewedAssets, setReviewedAssets] = useState([]);
  const [searchResults, setSearchResults] = useState({
    name: "",
    contract: "",
  });
  const [openSearch, setOpenSearch] = useState(false);
  const [limit, setLimit] = useState(50);
  // User
  const [userAssetsDisplay, setUserAssetsDisplay] = useState([]);
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  // Search
  const [searchAssetsDisplay, setSearchAssetsDisplay] = useState([]);
  const [searchIndex, setSearchIndex] = useState(
    +Math.abs(searchedAssets.length / limit) || 1
  );
  const [searchOffset, setSearchOffset] = useState(0);
  const [assetSearch, setAssetSearch] = useState("");
  const [traitsFilter, setTraitsFilter] = useState([]);
  const [traitCounts, setTraitCounts] = useState([]);
  const [traitCount, setTraitCount] = useState(0);
  //Asset detail
  const [viewAsset, setViewAsset] = useState({});

  useEffect(() => {
    if (!web3Address) {
      setOffset(0);
      setIndex(1);
      setSearchOffset(0);
      dispatch(getUserData(account, 0, 300));
    }
  }, [web3Address, account]);

  useEffect(() => {
    if (web3Address) {
      if (offset - index > userAssets.length) {
        dispatch(removeOrderAsset());
        setLoading(false);
      } else {
        setTimeout(() => {
          setIndex(index + 1);
          setOffset(index * limit);
        }, 3000);
        setUserAssetsDisplay(userAssets);
        dispatch(getUserAssets(web3Address, offset, limit));
        dispatch(getUserAssetsOrders(web3Address, offset, limit));
      }
    }
  }, [index, offset, totalAssetsCount, web3Address]);

  useEffect(() => {
    setTraitCounts(() => [
      ...new Set(
        searchedAssets.map(
          (x) =>
            x.traits.filter((t) => `${t.value}`.toLowerCase() !== "none").length
        )
      ),
    ]);
  }, [searchedCollection]);

  const firstEvent = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    console.log(bottom && searchOffset - searchIndex <= searchedAssets.length);
    if (bottom && searchedAssets.length < searchedCollection?.stats?.count) {
      setLoading(true);

      if (searchOffset - limit <= searchedAssets.length) {
        setSearchIndex(searchIndex + 1);
        setSearchOffset(searchIndex * limit);
      }
    } else {
      setLoading(false);
    }
  };

  const enableFilterResetBtn =
    (searchedAsset?.asset_contract && !assetSearch.length) ||
    traitCount ||
    traitsFilter.length;

  const handleAssetView = async (asset) => {
    setViewAsset({});
    const { data } = await api.getAssetEvents(
      asset?.asset_contract?.address,
      asset?.token_id
    );
    const events = data.asset_events;
    setViewAsset({ ...asset, events });
  };

  const toggleMenu = () => {
    setOpenSideNav({
      left: false,
      right: false,
    });
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const handleAssetSearch = (tokenAddress, tokenId) => {
    dispatch(getAsset(tokenAddress, tokenId));
  };

  const handleCollectionSearch = (contract, name) => {
    dispatch(removeCollectionAssets());
    setSearchIndex(0);
    setSearchOffset(0);
    setSearchResults({
      contract,
      name,
    });
  };

  const removeFilters = () => {
    setAssetSearch("");
    setTraitCount(0);
    setTraitsFilter([]);
  };

  const commonStateProps = {
    seaport,
    web3Address,
    userDetails,
    userAssets,
    userActivities,
    userCollections,
    collectionNames,
    totalAssetsCount,
    searchedAssets,
    searchedAsset,
    searchedCollection,
    watchLists,
    account,
    openSideNav,
    setOpenSideNav,
    reviewedAssets,
    setReviewedAssets,
    loading,
    setLoading,
    searchResults,
    setSearchResults,
    searchIndex,
    limit,
    setSearchIndex,
    snipedAssets,
    searchOffset,
    setSearchOffset,
    assetSearch,
    setAssetSearch,
    firstEvent,
    toggleMenu,
    enableFilterResetBtn,
    openSearch,
    toggleSearch,
    removeFilters,
    handleAssetSearch,
    traitsFilter,
    setTraitsFilter,
    traitCounts,
    traitCount,
    setTraitCount,
    userAssetsDisplay,
    setUserAssetsDisplay,
    searchAssetsDisplay,
    setSearchAssetsDisplay,
    handleCollectionSearch,
    viewAsset,
    handleAssetView,
  };

  return !web3Address ? (
    <Loading />
  ) : (
    <div
      style={{
        width: "100% !important",
        height: "100vh",
        overflow: "auto",
        padding: "0 2em",
        paddingBottom: "50px",
      }}
      onScroll={firstEvent}
    >
      <SearchFilter {...commonStateProps} />
      <Search {...commonStateProps} />

      <Routes>
        <Route path='/' element={<Dashboard {...commonStateProps} />} />
        <Route path='snipe' element={<Snipe {...commonStateProps} />} />
        <Route
          path='asset/:collection/:id'
          element={<Asset {...commonStateProps} />}
        />
        <Route
          path='collection/:collectionSlug'
          element={<Browser {...commonStateProps} />}
        />
        <Route path='assets' element={<Assets {...commonStateProps} />} />
        <Route path='watchlist' element={<Assets {...commonStateProps} />} />
        <Route path='offer' element={<Offers {...commonStateProps} />} />
        <Route path='auction' element={<Auction {...commonStateProps} />} />
        <Route path='buy' element={<Buy {...commonStateProps} />} />
        <Route path='sell' element={<Sell {...commonStateProps} />} />
      </Routes>
    </div>
  );
};

export default OpenseaX;
