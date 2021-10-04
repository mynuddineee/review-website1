import React from 'react';
import'./Course.css';

const Course = (props) => {
    const{courseNo, courseTitle, Price, img} = (props.course);
    return (
        <div className="">
        <div className="row row-cols-1 row-cols-md-1">
            <div className="col  p-4">
                <div className="card h-200 border border-primary">
                    <div>
                        <img src={img} className="image p-2" alt=""/>
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">Course No: {courseNo}</h5>
                        <p className="card-text">Course Name: {courseTitle}</p>
                        <p className="card-text">Course Price: {Price}</p>
                    </div>
                    <button type="submit" className="btn btn-primary"> Buy Course</button>
                </div>
            </div>
        </div>
        
    </div>
    
  
);
};

   

export default Course;