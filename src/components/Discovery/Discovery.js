import React from 'react';
import './Discovery.css'

const discovery = props => {
  console.log(props.id, '___+)+_)_+)_+)+_)_+)-=0')
  return (
    <div className="discovery_wrraper col-4">
      <div className="course_avatar">
        {props.courses[0] ? <img className="course_avatar" src={props.courses[0].image} alt="" /> : null}
      </div>
      <div className="teacher_info">
        <img className="avatar" src={props.teacherAvatar} alt="avatar" />
        <div>
          <span className="teacher_name">{props.teacherName} </span>
          <span className="teacher_name">{props.teacherLastName}</span>
          <span className="teacher_profession">{props.teacherProfession}</span>
        </div>
      </div>
      <div className="course_info">
        <span className="course_name">{props.courses[0] ? props.courses[0].name : null}</span>
        <span className="course_description">{props.courses[0] ? props.courses[0].description : null}</span>
      </div>
      <div className="add_course__info">
        <span>{props.courses.length} | <span>{props.courses[0] ? props.courses[0].length : null}</span> </span>
        <span className="course_price">{props.courses[0] ? props.courses[0].price : null} $</span>
      </div>
    </div>
  )

}

export default discovery