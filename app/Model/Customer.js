'use strict'

const Lucid = use('Lucid')

class Customer extends Lucid {

    static get table () {
        return 'customer'
    }

}

module.exports = Customer;