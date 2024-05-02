const { z } = require('zod');


const studentSchema = z.object({
   title:z.string().min(5),
   description:z.string().min(15),
  imageUrl:z.string().optional()
});


const validateComplaint = (req,res,next) => {
  try {
   
    const validatedData = studentSchema.parse(req.body);
  
    req.body =  validatedData;
    next()
  } catch (error) {
   
    return res.json({errors:error.errors,message:'the lenght of title and description is more than 5 and 15 respectively'})
  }
};

module.exports = validateComplaint;


