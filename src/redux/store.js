import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { i18nState } from 'redux-i18n';
import thunk from 'redux-thunk';
import authMiddleware from 'apex-web/lib/redux/middlewares/authMiddleware';
import languageMiddleware from 'apex-web/lib/redux/middlewares/languageMiddleware';
import placeOrderMiddleware from 'apex-web/lib/redux/middlewares/placeOrderMiddleware';
import startupMiddleware from 'apex-web/lib/redux/middlewares/startupMiddleware';
import wsConnectionMiddleware from 'apex-web/lib/redux/middlewares/wsConnectionMiddleware';
import orderFeeMiddleware from 'apex-web/lib/redux/middlewares/orderFeeMiddleware';
import marginEnableMiddleware from 'apex-web/lib/redux/middlewares/marginEnableMiddleware';
import priceQuantityIncrementMiddleware from 'apex-web/lib/redux/middlewares/priceQuantityIncrementMiddleware';
import level2monitorMiddleware from 'apex-web/lib/redux/middlewares/level2monitorMiddleware';
import snackOverrideMiddleware from 'apex-web/lib/redux/middlewares/snackOverrideMiddleware';

// reducers (sort by name)
import api from 'apex-web/lib/redux/reducers/apiReducer';
import apexCore from 'apex-web/lib/redux/apexCore';
import affiliate from 'apex-web/lib/redux/reducers/affiliateReducer';
import apiKey from 'apex-web/lib/redux/reducers/apiKeyReducer';
import apiProcessing from 'apex-web/lib/redux/reducers/apiProcessingReducer';
import auth from 'apex-web/lib/redux/reducers/authReducer';
import confirmWithdraw from 'apex-web/lib/redux/reducers/confirmWithdrawReducer';
import instrument from 'apex-web/lib/redux/reducers/instrumentReducer';
import deposit from 'apex-web/lib/redux/reducers/depositReducer';
import level1 from 'apex-web/lib/redux/reducers/level1Reducer';
import level2 from 'apex-web/lib/redux/reducers/level2Reducer';
import loyaltyFee from 'apex-web/lib/redux/reducers/loyaltyFeeReducer';
import modal from 'apex-web/lib/redux/reducers/modalReducer';
import orderHistory from 'apex-web/lib/redux/reducers/orderHistoryReducer';
import paginationMemory from 'apex-web/lib/redux/reducers/paginationReducer';
import product from 'apex-web/lib/redux/reducers/productReducer';
import productManifest from 'apex-web/lib/redux/reducers/productManifestReducer';
import position from 'apex-web/lib/redux/reducers/positionReducer';
import recentTrades from 'apex-web/lib/redux/reducers/recentTradesReducer';
import resetPassword from 'apex-web/lib/redux/reducers/resetPasswordReducer';
import report from 'apex-web/lib/redux/reducers/reportReducer';
import sidePane from 'apex-web/lib/redux/reducers/sidePaneReducer';
import signup from 'apex-web/lib/redux/reducers/signupReducer';
import snackbar from 'apex-web/lib/redux/reducers/snackbarReducer';
import tickers from 'apex-web/lib/redux/reducers/tickersReducer';
import transfer from 'apex-web/lib/redux/reducers/transferReducer';
import transferRequest from 'apex-web/lib/redux/reducers/transferRequestReducer';
import transferRequestRequested from 'apex-web/lib/redux/reducers/transferRequestRequestedReducer';
import user from 'apex-web/lib/redux/reducers/userReducer';
import verifyEmail from 'apex-web/lib/redux/reducers/verifyEmailReducer';
import verifyAddress from 'apex-web/lib/redux/reducers/verifyAddressReducer';
import verifyDevice from 'apex-web/lib/redux/reducers/verifyDeviceReducer';
import withdraw from 'apex-web/lib/redux/reducers/withdrawReducer';
import wsConnection from 'apex-web/lib/redux/reducers/wsConnectionReducer';
import eotc from 'apex-web/lib/redux/reducers/eotcReducer';
import eotcWithdraw from 'apex-web/lib/redux/reducers/eotcWithdrawReducer';
import eotcSettlement from 'apex-web/lib/redux/reducers/eotcSettlementReducer';
import eotcPrices from 'apex-web/lib/redux/reducers/eotcPriceReducer';
import { marginReducer as margin } from 'apex-web/lib/redux/reducers/marginReducers/marginReducer';
import productAttributes from 'apex-web/lib/redux/reducers/productAttributesReducer';
import interestBearingAccounts from 'apex-web/lib/redux/reducers/interestBearingAccountsReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [
          'LEVEL1_LOADED',
          'LEVEL_2_UPDATES',
          'REGISTER_FIELD',
          'ADD_RECENT_TRADE'
        ]
      })
    : compose;

const rootReducer = combineReducers({
  api,
  apexCore,
  apiKey,
  affiliate,
  auth,
  form: formReducer,
  i18nState,
  instrument,
  level1,
  level2,
  modal,
  orderHistory,
  product,
  productManifest,
  position,
  recentTrades,
  report,
  sidePane,
  signup,
  snackbar,
  user,
  apiProcessing,
  deposit,
  withdraw,
  wsConnection,
  tickers,
  transfer,
  transferRequest,
  paginationMemory,
  verifyEmail,
  verifyAddress,
  verifyDevice,
  confirmWithdraw,
  resetPassword,
  loyaltyFee,
  transferRequestRequested,
  eotc,
  eotcWithdraw,
  eotcSettlement,
  eotcPrices,
  margin,
  productAttributes,
  interestBearingAccounts
});

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(
      level2monitorMiddleware,
      priceQuantityIncrementMiddleware,
      marginEnableMiddleware,
      languageMiddleware,
      authMiddleware,
      placeOrderMiddleware,
      startupMiddleware,
      wsConnectionMiddleware,
      orderFeeMiddleware,
      snackOverrideMiddleware,
      thunk
    )
  )
);

export default store;
