const multer = require('multer');
const path  = require('path');


const storage = multer.diskStorage({
    destination: "uploads",
    filename: function(req, file, cb){
       cb(null,  Date.now() + file.originalname);
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myfile");
 
exports.uploadPhotoById = Model => (req,res) => {
   console.log(req.file)
    upload(req, res, async() => {
       //console.log("Request ---", req.body);
       //console.log("Request file ---", req.file);//Here you get file.
       const doc = await Model.findById(req.params.id)
       console.log(req.params.no)
       req.params.no = req.params.no || '1';
       if(req.params.no === '1') doc.image1 = (req.file.path)
       if(req.params.no === '2') doc.image2 = (req.file.path)
       if(req.params.no === '3') doc.image3 = (req.file.path)
       await doc.save().then(()=>{
           res.status(200).json({
               status:'success',
               product: doc
           })
       }).catch(err => res.status(500).json({status:'fail',message:'unable to upload photo'}))
       /*Now do where ever you want to do*/
    });
 }
