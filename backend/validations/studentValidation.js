const { z } = require('zod');

// Define a schema for your data
const studentSchema = z.object({
    studentName: z.string().min(3),
    studentPhone: z.string().min(10).max(11),
    studentEmail: z.string().email(),
    studentRollNumber: z.string().min(13).max(13),
    parentPhone: z.string().min(10).max(10),
    studentPassword: z.string().min(6),
    studentYear: z.string().min(1),
});

// Validate data against the schema
const validateStudent = (req,res,next) => {
  try {
    const validatedData = studentSchema.parse(req.body);
  
    req.body =  validatedData;
    next()
  } catch (error) {
   
    return res.json({errors:error.errors})
  }
};

module.exports = validateStudent;


