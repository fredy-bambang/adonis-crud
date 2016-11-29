const Customer = use('App/Model/Customer') 
const Validator = use('Validator')

class CustomerController {
    * index (req, res) {
        // const posts = yield Customer.all()
        // res.send(posts.toJSON());
        const posts = yield Customer.paginate(req.input('page', 1), 3) 
        console.log(posts.toJSON());
        // res.send('cek customer log');
        yield res.sendView('customer.index', {customers: posts.toJSON()})
    }

    * create (req, res) {
        // res.send('hello world'); 
        //yield response.sendView('welcome')

        // const post = new Customer()
        // post.address = 'zzz'
        // post.name  = 'abc'
        // post.phone  = '1234567890'
        // post.email  = 'adonis@adonis.com'

        // yield post.save() // SQL Insert
        // res.send(post.toJSON())
        // yield res.sendView('customer.index', {customers: posts.toJSON()})
        yield res.sendView('customer.create')
    }

    * store (req, res) {
        const postData = req.only('name', 'address', 'email', 'phone') 
        const rules = {
            name: 'required',
            address: 'required',
            email: 'required|email',
            phone: 'required'
        }

        const validation = yield Validator.validate(postData, rules) 

        if (validation.fails()) {
            console.log(validation);
            yield req
                .withOnly('name', 'address', 'email', 'phone')
                .andWith({ errors: validation.messages() })
                .flash() 

            res.redirect('back')
            return
        }

        yield Customer.create(postData) 
        res.redirect('/customers')
    }

    * show (req, res) {
        res.send('hello world'); 
        //yield response.sendView('welcome') 
    }

    * edit (req, res) {
        res.send('hello world'); 
        //yield response.sendView('welcome') 
    }

    * update (req, res) {
        res.send('hello world'); 
        //yield response.sendView('welcome') 
    }

    * delete (req, res) {
        res.send('hello world'); 
        //yield response.sendView('welcome') 
    }
}

module.exports = CustomerController
