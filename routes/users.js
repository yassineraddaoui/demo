const express = require('express')
const app=express();
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("User List")
});

router.get('/new',(req,res)=>{
    res.send("User create Form")
});
router.post('/',(req,res)=>{
    res.send('Create user');
});

router.route('/:id')
    .get(
        (req,res)=>{
            res.send('GET USER ID  = '+req.params.id)
        }
    )
    .post(
        (req,res)=>{
            res.send('POST USER ID  = '+req.params.id)
        }
    )
    .delete(
        (req,res)=>{
            res.send('DELETE USER ID  = '+req.params.id)
        }
    )
    .put(
        (req,res)=>{
            res.send('PUT USER ID  = '+req.params.id)
        }
    )

router.param("id",(req,res,next,id)=>{
    console.log('id = ' + id)
    next()
})
module.exports = router;
