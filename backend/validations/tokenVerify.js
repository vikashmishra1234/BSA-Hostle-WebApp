const jwt = require('jsonwebtoken');

exports.verifyStudent = async (req, res, next) => {
    try {
       
        const header = req.headers.authorization;
        console.log(header)
        if(!header){
            return res.status(401).json({ success: false, error: 'Authorization token is missing' });

        }
        const token = header.split(" ")[1];
    
        if (!token) {
            return res.status(401).json({ success: false, error: 'Authorization token is missing' });
        }

      
        jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ success: false, error: 'Invalid token' });
            } else {
               
                req.student = decoded; // Assuming the decoded data contains student information
                next(); // Call the next middleware
            }
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};


exports.verifyAdmin = async (req, res, next) => {
    try {
        // Extract token from request headers, query parameters, or cookies
        const header = req.headers.authorization;
        const token = header.split(" ")[1];
     
        if (!token) {
            return res.status(401).json({ success: false, error: 'Authorization token is missing' });
        }

        // Verify the token
        jwt.verify(token, process.env.SECRETE_KEY1, (err, decoded) => {
            if (err) {
                return res.status(401).json({ success: false, error: 'Invalid token' });
            } else {
               
               
                req.admin = decoded; // Assuming the decoded data contains student information
                next(); // Call the next middleware
            }
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};


