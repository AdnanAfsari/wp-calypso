/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';

class ScanHistoryPage extends Component {
	render() {
		return ( <div>Welcome to the scan history page for site { this.props.siteId }</div> );
	}
}

export default connect( state => {
	const siteId = getSelectedSiteId( state );

	return {
		siteId,
	};
} )( ScanHistoryPage );
