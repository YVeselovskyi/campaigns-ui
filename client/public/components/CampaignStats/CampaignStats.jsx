import React from 'react';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { alertActions, campaignsActions } from '../../actions';
import { ChartDataGenerator } from '../../helpers';
import './CampaignStats.css';

const buttonStyle = {
  color: '#000',
  background: '#F9FAFA',
  border: 'none',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#595A5A',
};

class CampaignStats extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      getCampaignStats, campaignId,
    } = this.props;
    getCampaignStats(campaignId);
  }

  componentWillReceiveProps(nextProps) {
    const currentId = this.props.campaignId;
    const nextId = nextProps.campaignId;

    if (currentId !== nextId) {
      this.props.getCampaignStats(nextId);
    }
  }

  render() {
    const { campaignId } = this.props;
    const { items, stats } = this.props.campaigns;
    let chosenCampaign;
    if (items && items.length) {
      chosenCampaign = items.find(campaignItem => campaignItem.id === campaignId);
    }
    return (
      (items && stats) ? <div className="container">
        <div className="row campaign-name-section">
          <div className="col-md-6">
            {chosenCampaign && <h3> {chosenCampaign.name } </h3> }
          </div>
          <div className="col-md-6" style={{display: 'flex'}}>
            <div className="menu-section">
              <UncontrolledButtonDropdown>
                <DropdownToggle caret size="md">
                  Choose campaign
                </DropdownToggle>
                <DropdownMenu className="campaigns-dropdown">
                  {items.map(campaignItem => (
                    <DropdownItem key={`dropdown-${campaignItem.id}`} className={campaignItem.id === campaignId ? 'active-campaign' : ''}>
                      <Link to={`/campaigns/${campaignItem.id}`} style={linkStyle}>{campaignItem.name }</Link>
                    </DropdownItem>))}
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
            <div className="menu-section">
              <Button style={buttonStyle} size="md"><Link to="/" style={linkStyle}>All Campaigns</Link></Button>
            </div>
          </div>
        </div>
        <div className="row">
          <Line
            legend={{ display: false }}
            data={ChartDataGenerator.lineChartData(stats)}
          />
        </div>
      </div> : <div className="container loader-container"> <Spinner name="chasing-dots" /> </div>
    );
  }
}

const connectedCampaignStats = connect((state) => {
  const { campaigns, alert } = state;
  return {
    alert,
    campaigns,
  };
}, { getCampaignStats: campaignsActions.getCampaignStats })(CampaignStats);

export { connectedCampaignStats as CampaignStats };
