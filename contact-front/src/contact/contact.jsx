import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import ContactForm from './contactForm'
import ContactList from './contactList'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Contacts" small='Add'></PageHeader>
                <ContactForm />
                <ContactList />
            </div>
        )
    }
}