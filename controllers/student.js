const StudentSchema=require("../models/student");

exports.getAllStudents=async(req,res)=>{
  try {
    let payload= await StudentSchema.find({});
    res.status(200).json({message:"Fetched data successfully",payload})
    
  } catch (error) {
    res.status(501).json({message:"SERVER ERROR"})
    
  }
}
exports.getStudent=async(req,res)=>{
  try {
    let payload= await StudentSchema.findOne({_id: req.params.id});
    res.status(200).json({message:"Fetched student data",payload})
    
  } catch (error) {
    res.status(501).json({message:"SERVER ERROR"})
    
  }
}
exports.createStudent=async (req,res)=>{
  try {
    let {name,std_id,email,courses}=req.body;
    let payload={
      name,
      std_id,
      email,
      courses
    };
    //save payload into database
    let data=await StudentSchema.create(payload);
    res.status(201).json({message:"succesfully student created",data})
    
  } catch (err) {
    console.log(err);
    res.status(201).json({message:"SERVER ERROR"})
    
  }
};
exports.updateStudents=async(req,res)=>{
  try {
    let {name,std_id,email,courses}=req.body;
    let payload=await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {name,
        std_id,
        email,
        courses
      },
      {new:true}
      );
      await payload.save();
      res.status(201).json({message:"successfully student updated",payload})
    
  } catch (err) {
    res.status(501).json({message:"SERVER ERROR"})
    
  }
};
exports.deleteStudent=async(req,res)=>{
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Succesfully Student deleted"})
    
  } catch (err) {
    res.status(501).json({message:"SERVER ERROR"})
    
  }
};