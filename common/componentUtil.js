import { execute } from "./serviceExecutor";

export const APP_STATE_VUEX_SELECTED_ITEM = "vuex_selected_item";
export const APP_STATE_VUEX_SHIPPING_ADDRESSES = "vuex_shipping_addresses";
export const APP_STATE_VUEX_USER_PROFILE = "vuex_user_profile";

export const NAVIGATION_ADD_ADDRESS_PAGE =
  "pages/selectShippingAddress/addAddress";
export const NAVIGATION_BACK = "back";
export const NAVIGATION_CONFIRM_PURCHASE_PAGE =
  "pages/confirmPurchase/confirmPurchase";
export const NAVIGATION_ITEM_DETAIL_PAGE = "pages/itemDetail/itemDetail";
export const NAVIGATION_LANDING_PAGE = "pages/landingPage/landingPage";
export const NAVIGATION_LOGIN_PAGE = "pages/login/login";
export const NAVIGATION_LOGIN_CODE_PAGE = "pages/login/code";
export const NAVIGATION_PRE_PURCHASE_PAGE = "pages/prePurchase/prePurchase";
export const NAVIGATION_SELECT_SHIPPING_ADDRESS_PAGE =
  "pages/selectShippingAddress/selectShippingAddress";

export const STORAGE_USER_TOKEN = "USER_TOKEN";

export default class ComponentUtil {
  _self;

  constructor(self) {
    this._self = self;
  }

  get self() {
    return this._self;
  }

  // user permission

  // appState
  getAppStateValue(key) {
    return this.self[key];
  }

  setAppStateValue(key, value) {
    this.self.$u.vuex(key, value);
  }

  // navigation
  goTo(page, params = {}, type = "to") {
    if (page === NAVIGATION_BACK) {
      type = "back";
    }
    this.self.$u.route({
      animationType: "slide-in-right",
      params: params,
      url: page,
      type,
    });
  }

  // service
  async serviceExecute(service) {
    return execute(service, this.getStorage(STORAGE_USER_TOKEN), (token) =>
      this.setStorage(STORAGE_USER_TOKEN, token)
    );
  }

  // storage
  getStorage(key) {
    return uni.getStorageSync(key);
  }

  setStorage(key, value) {
    uni.setStorage({
      key,
      data: value,
    });
  }

  showToast(title, success = () => {}, duration = 1500) {
    uni.showToast({
      duration,
      icon: "none",
      position: "bottom",
      title,
    });
    setTimeout(() => {
      success();
    }, duration);
  }
}
