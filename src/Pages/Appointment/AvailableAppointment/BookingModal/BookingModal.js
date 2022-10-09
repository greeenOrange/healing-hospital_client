import { format } from 'date-fns';
import React from 'react';
import './BookingModal.css'

const BookingModal = ({treatment, date}) => {
    const {name, slots} = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event?.target?.value;
        console.log(slot, "clicked");
    }

    return (
        <div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box relative">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-center">{name}</h3>
    <form onSubmit={handleBooking} className='grid lg:grid-cols-1 gap-4 justify-items-center mt-2'>
    <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs" />
    <select className="select w-full max-w-xs">
  <option disabled defaultValue="">Pick one slot</option>
  {
    slots?.map(slot => <option value={slot}>{slot}</option>)
  }
  
</select>
    <input type="text" name='name' placeholder="Name" className="input w-full max-w-xs" />
    <input type="email" name='email' placeholder="Email" className="input w-full max-w-xs" />
    <input type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs" />
    <input type="submit" value="submit" className="input w-full max-w-xs btn bg-neutral" />
    </form>
    {/* <div className="modal-action">
      <label htmlFor="booking-modal" className="btn">Yay!</label>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default BookingModal;