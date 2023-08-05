import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Book(props) {
  console.log(props)
  return (
 <Card style={{ width: '18rem' }} className='h-5/6' >
      <Card.Img variant="top" src={props.cover_img} alt="Cover"  className='object-cover h-3/5' />
      <Card.Body className='h-fit'>
        <Link to={`/book/${props.id}`} {...props} >
        <Card.Title className='text-center text-black font-serif text-xl font-extrabold'>{props.title}</Card.Title>
        </Link>
        <Card.Text className='text-center text-black font-serif text-l '>
          {props.edition_count}
        </Card.Text>
        <Card.Text className='text-center text-black font-serif text-l'>
          {props.first_publish_year}
        </Card.Text>
       
      </Card.Body>
    </Card>
    // <div>
    //   <div>
    //     <img src={props.cover_img} alt="Cover" />
    //   </div>
    //   <div>
    //     <Link to={`/book/${props.id}`} {...props}>
    //       <div>
    //         <span>{props.title}</span>
    //       </div>
    //     </Link>
    //     <div>
    //       <span>Author: </span>
    //       <span>{props.edition_count}</span>
    //     </div>
    //     <div>
    //       <span>First Publish Year:</span>
    //       <span>{props.first_publish_year}</span>
    //     </div>
    //   </div>
    // </div>
  )
}
