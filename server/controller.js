module.exports = {
    read: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_houses().then(houses=>
            res.status(200).send(houses)
            ).catch(err=>{
                res.status(500).send({errorMessage: "Things went wrong"});
            });
    },
    create: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {name,address,city,state,zipcode} = req.body;
        console.log('Name: ', name);
        console.log('Address: ', address);
        console.log('City: ', city);
        console.log('State: ', state);
        console.log('Zipcode: ', zipcode);
        dbInstance.create_home([name,address,city,state,zipcode]).then(()=> 
        res.sendStatus(200)
        ).catch(err=>{
            res.status(500).send({errorMessage: "Things went wrong"});
            console.log('err is', err);
        });
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_home([req.params.name]).then(()=>
        res.sendStatus(200)
        ).catch(err=>{
            res.status(500).send({errorMessage: "Things went wrong"});
        })
    }
}