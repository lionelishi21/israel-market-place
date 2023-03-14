import Odoo from 'async-odoo-xmlrpc';

export default defineEventHandler(async (event) => {
    
    
    console.log("GET /api/products");

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

        let products = await odoo.execute_kw('product.template', 'search_read', [[['type', '=', 'consu']]]);
        return products.slice(0, 4)
    } catch(e) {
        console.error("Error when try connect Odoo XML-RPC.", e);
    }

})