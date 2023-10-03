import React from 'react';
import { sortOpt, statusOpt, typeOpt } from '../helpers/constants';
import { useDispatch } from 'react-redux';
import { filterBySearch, filterByStatus } from '../redux/jobSlice';




const Filter = () => {
    const dispatch = useDispatch()
  return (
    <div className='filter-sec'>
        <h2>Arama Formu</h2>
      <form className='form'>

<div>
  <label>Arama</label>
  <input onChange={(e) => useDispatch(filterBySearch(e.target.value))} placeholder='örn: amazon' type="text" />
</div>



<div>
  <label>Durum</label>
  <select onChange={(e) => dispatch(filterByStatus(e.target.value))} required  >
    <option hidden>Seçiniz</option>
    {statusOpt.map((opt, i) => (
      <option key={i}>{opt}</option>
    ))}
  </select>
</div>

<div>
  <label>Tür</label>
  <select name="type" >
    <option hidden>Seçiniz</option>
    {typeOpt.map((opt, i) => (
      <option key={i}>{opt}</option>
    ))}
  </select>
</div>

<div>
  <label>Sırala</label>
  <select name="type" >
    <option hidden>Seçiniz</option>
    {sortOpt.map((opt, i) => (
      <option key={i}>{opt}</option>
    ))}
  </select>
</div>

      <div className='button-area'><button>Filtreleri Temizle</button></div>

</form>
    </div>
  )
}

export default Filter
