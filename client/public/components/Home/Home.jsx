import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CampaignsList } from '../CampaignsList/CampaignsList';
import { CampaignStats } from '../CampaignStats/CampaignStats';


const Home = () => (
  <div>
    <Switch>
      <Route exact path="/" component={CampaignsList} />
      <Route
        exact
        path="/campaigns/:campaignId"
        render={({ match }) => (
          <CampaignStats campaignId={match.params.campaignId} />
        )}
      />
    </Switch>
  </div>
);

export { Home };
