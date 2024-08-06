const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// router.post('/',async (req,res) =>
//     {
//        try{
//           const data = req.body;
//           const newMenu = new MenuItem(data);
//           const response = await newMenu.save();
//           console.log('data saved');
//           res.status(200).json(response);
//        }
//        catch(err)
//        {
//           console.log(err);
//           res.status(500).json({error: 'Internal server error'});
//        }
//     });

router.post('/',async (req,res)=>
   {
      try{
         const data = req.body;
         const newMenu = new MenuItem(data);
         const response = await newMenu.save();
         console.log('data saved');
         res.status(200).json(response);
      }
      catch(err)
      {
         console.Console(err);
         res.status(500).json('internal server error');
      }
   });

router.get('/:taste',async(req,res)=>
   {
      try
      {
         const taste = req.params.taste;
         if(taste === 'Sweet' || taste === 'Spicy' || taste === 'Sour')
         {
            const response = await MenuItem.find({taste:taste});
            console.log('response fetched');
            res.status(200).json(response);
         }
         else
         {
            res.status(500).json({error: 'Invalid taste type'});
         }
      }
      catch(err)
      {
         console.log(err);
         res.send.status(500).json({error: 'internal server error'});
      }
   });

router.put('/:id',async (req,res)=>
   {
      try{
            const menuId = req.params.id;
            const updatemenuData = req.body;
            const response = await MenuItem.findByIdAndUpdate(menuId,updatemenuData,{
               new : true,
               runValidators: true,
            })
            if(!response)
            {
               return res.status(500).json('item not found');
            }
            else
            {
               console.log('updated successfully');
            }
      }
      catch(err)
      {
         console.log(err);
         res.status(500).json({error: 'internal server error'});
      }
});

router.delete('/:id',async (req,res)=>
   {
      try{
      const menuId = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menuId);
         if(!response)
         {
            return req.status(404).json({error: 'Item not found'});
         }
         else
         {
            console.log('deleted successfully');
            res.status(500).json({error: 'item deleted successfully'});
         }
      }
      catch(err)
      {
      console.log(err);
         res.status(500).json({error: 'internal server error'});
      }
   });


module.exports = router;
