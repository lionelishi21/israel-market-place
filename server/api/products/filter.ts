import Odoo from 'async-odoo-xmlrpc';

interface IRequestBody {
   search: string;
}

export default defineEventHandler(async (event) => {
    
    console.log("GET /api/filter");
    const body = await getQuery(event);
    const filter = JSON.parse(body.search)
    var odoo = new Odoo({
        url: 'http://ec2-3-80-77-245.compute-1.amazonaws.com',
        port: 8069,
        db: 'admin',
        username: 'admin',
        password: 'admin'
    });
    
    try {
        await odoo.connect();

        if(filter.category_id  === null) {
            let products = await odoo.execute_kw('product.product', 'search_read', [
                [['type', '=', 'consu']]
                , ['name','list_price', 'image_512', 'categ_id', 'rating_avg', 'rating_count', 'website_url', 'public_categ_ids', 'website_meta_keywords'] // Fields
                , 0, 5 // Offset, Limit
              ]);
      
              return products

        } else {
            let products = await odoo.execute_kw('product.product', 'search_read', [
                [['type', '=', 'consu'], ['public_categ_ids', '=',  Number(filter.category_id)]]
                , ['name','list_price', 'image_512', 'categ_id', 'rating_avg', 'rating_count', 'website_url', 'public_categ_ids', 'website_meta_keywords'] // Fields
                , 0, 5 // Offset, Limit
              ]);
      
              return products
        }
       
    } catch(e) {
        console.error("Error when try connect Odoo XML-RPC.", e);
    }

})