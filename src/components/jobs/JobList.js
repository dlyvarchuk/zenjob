import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { jobsService } from '../services/jobs.service';
import JobDetails from './JobDetails';


class JobList extends Component {
    state = { data: [] };

    componentDidMount() {
        jobsService.getAll()
            .then(offers => this.setState({ offers }))
            .catch(error => console.error('Error:', error));
    }

    renderOffers() {
        return this.state.data.map(offer =>
            <JobDetails key={offer.offers.id} data={offer} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderOffers()}
            </ScrollView>
        );
    }
}

export default JobList;
