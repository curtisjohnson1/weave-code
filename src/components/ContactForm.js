import React, { Component } from 'react';

class ContactForm extends Component {
    constructor (props) {
        super (props);

        this.state = {
            days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
        event.preventDefault();

        this.checkSubmit(this.state);

        if (this.state.email === this.state.confirmEmail && this.state.firstName &&
            this.state.lastName && this.state.day && this.state.month && this.state.year) {
            
            alert('Thank you. A brochure will be with you shortly');
            
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
        if (this.state.email !== this.state.confirmEmail) {
            alert('Please confirm your email');
        }
    }

    checkSubmit (state) {
        if (!state.firstName) {
            alert('First Name is required');
        }
        if (!state.lastName) {
            alert('Last Name is required');
        }
        if (!state.day || !state.month || !state.year) {
            alert('Please insert your date of birth');
        }
        if (!state.email || !state.confirmEmail) {
            alert('Please insert your email');
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
                            {this.state.days.map((day, i) => {
                                return <option key={i} value={day}>{day}</option>;
                            })}
                        </select>
                        <select value={this.state.month} onChange={this.handleMonth} className="month">
                            {this.state.months.map((month, i) => {
                                return <option key={i} value={month}>{month}</option>;
                            })}
                        </select>
                        <select value={this.state.year} onChange={this.handleYear} className="year">
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
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