const FirstY = require("../models/Attendences/firstYear");

exports.firsYearAttendece = async (req, res) => {
    try {
        
        const { studentId } = req.body;
      
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0); // Set time to 00:00:00:000
        const endOfToday = new Date();
        endOfToday.setHours(23, 59, 59, 999); // Set time to 23:59:59:999
      
        const isMarked = await FirstY.findOne({
          $and: [
            {studentId: studentId },
            { createdAt: { $gte: startOfToday, $lte: endOfToday } },
          ],
        });
      
        if (isMarked) {
          return res
            .status(404)
            .json({ success: false, error: "Attendece already Marked" });
        }
      
        const newAttendence = await FirstY(req.body);
        await newAttendence.save();
        console.log(newAttendence);
        return res
          .status(200)
          .json({ success: true, message: "Marked Successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({success:false,error:error.message});
    }
};
