/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class EditForm extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		var contact = {
			id: this.props.contactToEdit.id,
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim(),
		}

		AppAcion.updateContact(contact);
	}
	
	handleChange(fieldName, event) {
		var newState = event.target.value;
		var selected = this.state.selected;
		selected.name = newState;
		this.setState({ selected: selected });
	}
	
	render() {
		return (
			<div className="well">
				<h3>Edit contact</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'name')} value={this.props.contactToEdit.name} ref="name" placeholder="Name..." />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contactToEdit.phone} ref="phone" placeholder="Phone..." />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'email')} value={this.props.contactToEdit.email} ref="email" placeholder="Email..." />
					</div>
					<button className="btn btn-primary btn-block" type="submit">Add</button>
				</form>
			</div>
		);
	}
}