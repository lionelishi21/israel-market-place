import Odoo from 'async-odoo-xmlrpc';

export default defineEventHandler( async (event) => {

    console.log("GET /api/categories");

    // Connection block
    var odoo = new Odoo({
        url: 'http://ec2-3-80-77-245.compute-1.amazonaws.com',
        port: 8069,
        db: 'admin',
        username: 'admin',
        password: 'admin'
    });

    try {
       
        await odoo.connect();
        console.log("Connect to Odoo XML-RPC is successed.");

        let categories = await odoo.execute_kw('product.public.category', 'search_read', []);
        return categories;

    } catch (e) {
        console.error('Error when trying to connect odoo xml-rpc', e)
    }
})