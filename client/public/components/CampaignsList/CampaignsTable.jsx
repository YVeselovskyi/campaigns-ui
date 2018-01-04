import React from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#212529',
};

const CampaignsTable = props => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Status</th>
        <th>Name</th>
        <th>Daily Budget</th>
        <th>Total Budget</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.campaigns.items && props.campaigns.items.map(campaignItem => (
        <tr key={campaignItem.id}>
          <td>
            {campaignItem.status === 'ACTIVE' ? <span className="badge badge-primary">ACTIVE</span> : <span className="badge badge-secondary" onClick={() => props.markActivity(false)}>INACTIVE</span>}
          </td>
          <td>{campaignItem.name}</td>
          <td>{campaignItem.daily_budget}</td>
          <td>{campaignItem.total_budget}</td>
          <td>
            <UncontrolledButtonDropdown>
              <DropdownToggle caret>
                Action
              </DropdownToggle>
              <DropdownMenu>
                {campaignItem.status === 'ACTIVE' ? <DropdownItem onClick={() => props.markActivity(true, campaignItem.id)} >Deactivate</DropdownItem> : <DropdownItem onClick={() => props.markActivity(false, campaignItem.id)}>Activate</DropdownItem>}
                <DropdownItem><Link to={`/campaigns/${campaignItem.id}`} style={linkStyle}>Stats</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </td>
        </tr>
        ))}
    </tbody>
  </table>
);

export { CampaignsTable };
