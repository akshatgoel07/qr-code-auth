import React from 'react'

const Event = (props) => {
  return (
    <>
    <div className='card'>
      <div className ='event-heading'>Event Heading </div>
      <div className ='event-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</div>
      <div className ='event-details'>
        <div className ='date'>Date: 07 Aug 2023</div>
        <div className ='venue'>Venue: Graphic Era deemed to be university</div>
      </div>
      <div className='book-now'>Book Now</div>
    </div>
    <br />
    </>
  )
}
export default Event