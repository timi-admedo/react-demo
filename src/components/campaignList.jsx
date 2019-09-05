import React, { Component } from 'react';
import { getCampaigns, saveCampaign } from '../services/fakeCampaignService';

class CampaignList extends Component {
    state = {
        //campaigns: []
        campaigns: getCampaigns()
    };


    // LIFECYCLE HOOKS
    // componentDidMount = () => {
    //     const campaignList = getCampaigns()
    //     this.setState({campaigns: campaignList})
    // }

    // componentWillUnmount = () => {
    //     this.state.campaigns.map(c => saveCampaign(c))
    // }


    handleDelete = (campaign) => {
        // console.log(campaign );

        // const newList = [];
        // for(let i = 0; i< this.state.campaign .length; i++) {
        //     if(this.state.campaign s[i].id === campaign .id){
        //         return
        //     } else {
        //         campaign s.concat(this.state.campaign s[i])
        //     }
        // }

        const newList = this.state.campaigns.filter(m => m.id !== campaign.id);
        this.setState({campaigns: newList});
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Account</th>
                            <th>CPM</th>
                            <th>Click Rate</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.campaigns.map(campaign  =>(
                            <tr key={campaign.id}>
                                <td>{campaign.name}</td>
                                <td>{campaign.account.name}</td>
                                <td>{campaign.CPM}</td>
                                <td>{campaign.dailyClickRate}</td>
                                <td><button onClick={() => this.handleDelete(campaign)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CampaignList;