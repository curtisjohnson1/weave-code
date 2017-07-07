import React, { Component } from 'react';

class ContactForm extends Component {
    constructor (props) {
        super (props);

        this.state = {
            firstName: '',
            lastName: '',
            day: '',
            month: '',
            year: '',
            email: '',
            confirmEmail: ''
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleDay = this.handleDay.bind(this);
        this.handleMonth = this.handleMonth.bind(this);
        this.handleYear = this.handleYear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
    }

    handleFirstName (event) {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastName (event) {
        this.setState({
            lastName: event.target.value
        });
    }

    handleEmail (event) {
        this.setState({
            email: event.target.value
        });
    }

    handleConfirmEmail (event) {
        this.setState({
            confirmEmail: event.target.value
        });
    }

    handleDay (event) {
        this.setState({
            day: event.target.value
        });
    }

    handleMonth (event) {
        this.setState({
            month: event.target.value
        });
    }

    handleYear (event) {
        this.setState({
            year: event.target.value
        });
    }

    handleSubmit (event) {
        if (this.state.email === this.state.confirmEmail) {
            alert('a brochure will be with you shortly');
            event.preventDefault();
            
            this.setState({
                firstName: '',
                lastName: '',
                day: '',
                month: '',
                year: '',
                email: '',
                confirmEmail: ''                
            });
        }
        else {
            alert('please confirm your email');
        }
    }

    render () {
        return (
            <div className="contact-details-container">
                <span className="contact-name">
                    <form onSubmit={this.handleSubmit}>
                        <label>First Name</label><br/>
                        <input value={this.state.firstName} onChange={this.handleFirstName} type="text"/><br/>
                        <br/>
                        <label>Last Name</label><br/>
                        <input value={this.state.lastName} onChange={this.handleLastName} type="text"/><br/>
                        <br/>
                        <label>Date of Birth</label><br/>
                        <select value={this.state.day} onChange={this.handleDay} className="day">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select value={this.state.month} onChange={this.handleMonth} className="month">
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                        </select>
                        <select value={this.state.year} onChange={this.handleYear} className="year">
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                        </select>
                    </form>
                </span>
                <span className="contact-email">
                    <form onSubmit={this.handleSubmit}>
                        <label>Email</label><br/>
                        <input value={this.state.email} onChange={this.handleEmail} type="text"/><br/>
                        <br/>
                        <label>Confirm Email</label><br/>
                        <input value={this.state.confirmEmail} onChange={this.handleConfirmEmail} type="text"/><br/>
                        <br/><br/>
                        <button onSubmit={this.handleSubmit} className="contact-button">Submit</button>
                    </form>
                </span>
            </div>
        );
    }
}

export default ContactForm;