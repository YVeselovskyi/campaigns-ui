import React from 'react';
import { connect } from 'react-redux';
import { alertActions, campaignsActions } from '../../actions';
import { CampaignsTable } from './CampaignsTable';


class CampaignsList extends React.Component {
  constructor(props) {
    super(props);
    this.markActivity = this.markActivity.bind(this);
  }

  componentWillMount() {
    this.props.getAll();
  }

  markActivity(isActive, id) {
    const { activate, deactivate } = this.props;
    return isActive ? deactivate(id) : activate(id);
  }

  render() {
    const { campaigns, alert } = this.props;
    return (
      <div className="container">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <div className="row">
          {campaigns.loadingCampaigns ? <em>Loading campaigns...</em>
            : <CampaignsTable campaigns={campaigns} markActivity={this.markActivity} />}
        </div>
      </div>
    );
  }
}

const connectedCampaignsList = connect((state) => {
  const { campaigns, alert } = state;
  return {
    campaigns,
    alert,
  };
}, {
  getAll: campaignsActions.getAll,
  activate: campaignsActions.activateCampaign,
  deactivate: campaignsActions.deactivateCampaign,
})(CampaignsList);

export { connectedCampaignsList as CampaignsList };
