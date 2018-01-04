import { campaignsConstants } from '../constants';
import { campaignsService } from '../services';
import { alertActions } from './';

function getAll() {
  return (dispatch) => {
    dispatch(request());

    campaignsService.getAll()
      .then(
        campaigns => dispatch(success(campaigns)),
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };

  function request() { return { type: campaignsConstants.GETALL_REQUEST }; }
  function success(campaigns) { return { type: campaignsConstants.GETALL_SUCCESS, campaigns }; }
  function failure(error) { return { type: campaignsConstants.GETALL_FAILURE, error }; }
}

function getCampaignStats(id) {
  return (dispatch, getState) => {
    const { campaigns } = getState();
    if (!campaigns.items) {
      dispatch(getAll());
    }
    dispatch(request());
    campaignsService.getCampaignStats(id)
      .then(
        stats => dispatch(success(stats)),
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };

  function request() { return { type: campaignsConstants.GETSTATS_REQUEST }; }
  function success(stats) { return { type: campaignsConstants.GETSTATS_SUCCESS, stats }; }
  function failure(error) { return { type: campaignsConstants.GETSTATS_FAILURE, error }; }
}

function activateCampaign(id) {
  return (dispatch) => {
    dispatch(request());
    campaignsService.activateCampaign(id)
      .then(
        campaign => dispatch(success(campaign)),
        (error) => {          
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };

  function request() { return { type: campaignsConstants.ACTIVATE_CAMPAIGN_REQUEST }; }
  function success(campaign) { return { type: campaignsConstants.ACTIVATE_CAMPAIGN_SUCCESS, campaign }; }
  function failure(error) { return { type: campaignsConstants.ACTIVATE_CAMPAIGN_FAILURE, error }; }
}

function deactivateCampaign(id) {
  return (dispatch) => {
    dispatch(request());
    campaignsService.deactivateCampaign(id)
      .then(
        campaign => dispatch(success(campaign)),
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };

  function request() { return { type: campaignsConstants.DEACTIVATE_CAMPAIGN_REQUEST }; }
  function success(campaign) { return { type: campaignsConstants.DEACTIVATE_CAMPAIGN_SUCCESS, campaign }; }
  function failure(error) { return { type: campaignsConstants.DEACTIVATE_CAMPAIGN_FAILURE, error }; }
}

export const campaignsActions = {
  getAll,
  getCampaignStats,
  activateCampaign,
  deactivateCampaign,
};
