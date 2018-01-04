import { campaignsConstants } from '../constants';

export function campaigns(state = {}, action) {
  switch (action.type) {
    case campaignsConstants.GETALL_REQUEST:
      return {
        loadingCampaigns: true,
      };
    case campaignsConstants.GETALL_SUCCESS:
      return {
        items: action.campaigns,
        stats: state.stats,
        loadingCampaigns: false,
      };
    case campaignsConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingCampaigns: false,
      };
    case campaignsConstants.GETSTATS_REQUEST:
      return {
        ...state,
        loadingStats: true,
      };
    case campaignsConstants.GETSTATS_SUCCESS:
      return {
        ...state,
        stats: action.stats,
        loadingStats: false,
      };
    case campaignsConstants.GETSTATS_FAILURE:
      return {
        ...state,
        error: action.error,
        loadingStats: false,
      };
    case campaignsConstants.ACTIVATE_CAMPAIGN_REQUEST:
      return {
        ...state,
      };
    // API request to activate campaign does not work so simply return state ...
    case campaignsConstants.ACTIVATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
      };
    case campaignsConstants.ACTIVATE_CAMPAIGN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case campaignsConstants.DEACTIVATE_CAMPAIGN_REQUEST:
      return {
        ...state,
      };
    // API request to deactivate campaign does not work so simply return state ...
    case campaignsConstants.DEACTIVATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
      };
    case campaignsConstants.DEACTIVATE_CAMPAIGN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
