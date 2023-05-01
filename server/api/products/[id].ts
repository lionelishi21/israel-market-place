import Odoo from 'async-odoo-xmlrpc';

export default defineEventHandler( async (event) => {
   
    const productId = await event.context.params.id;
    console.log(`GET /api/products/${productId}`);

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
     
        let id = await odoo.execute_kw('product.template', 'search', [
            [['id', '=', productId]]]);

        let products = await odoo.execute_kw('product.template', 'read', [id]);
        return products
        
    } catch(e) {
        console.error("Error when try connect Odoo XML-RPC.", e);
    }
})