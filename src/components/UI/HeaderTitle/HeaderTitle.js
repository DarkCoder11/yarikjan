import React from 'react';
import './HeaderTitle.css'

const headerTitle = props => (
  <div className="headerTitleWrraper">
    <span className="title">{props.title}</span>
    <span className="subtitle">{props.subtitle}</span>
  </div>
)

export default headerTitle