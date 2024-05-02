import React, { useContext, useState } from 'react';
import { addStudent } from '../services/Admin';
import { MyContext } from '../../Context/Contex';
import { Loading } from '../Loader';


const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentPhone: '',
    studentEmail: '',
    studentRollNumber: '',
    parentPhone: '',
    studentPassword: '',
    studentYear: ''
  });
  const {change,setChange} = useContext(MyContext);
  const [loader,setLoader]= useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to backend or performing validation
    setLoader(true)
    const res = await addStudent(formData);
    setLoader(false)
    if(res.success){
setChange(!change);
alert("Student Saved Successfully");
setFormData('')
    }
    
  };

  return (
    <div className="student-container" id='addstudent'>
      {
        loader&&<Loading/>
      }
        <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          required
        />
        <input
          type="text"
          name="studentPhone"
          value={formData.studentPhone}
          onChange={handleChange}
          placeholder="Student Phone"
          required
        />
        <input
          type="email"
          name="studentEmail"
          value={formData.studentEmail}
          onChange={handleChange}
          placeholder="Student Email"
          required
        />
        <input
          type="text"
          name="studentRollNumber"
          value={formData.studentRollNumber}
          onChange={handleChange}
          placeholder="Student Roll Number"
          required
        />
        <input
          type="text"
          name="parentPhone"
          value={formData.parentPhone}
          onChange={handleChange}
          placeholder="Parent Phone"
          required
        />
        <input
          type="password"
          name="studentPassword"
          value={formData.studentPassword}
          onChange={handleChange}
          placeholder="Student Password"
        />
        <input
          type="text"
          name="studentYear"
          value={formData.studentYear}
          onChange={handleChange}
          placeholder="Student Year"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
