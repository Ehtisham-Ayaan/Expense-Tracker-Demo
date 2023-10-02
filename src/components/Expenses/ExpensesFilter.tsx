const ExpensesFilter = (props: any) => {
  const dropdownChangeHandler = (event: any) => {
    props.onChangeFilter(event.target.value)
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <label>Filter by year </label>
        <select style={{marginLeft: 'auto', marginRight: '10px'}} value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>      
    </div>
  )
}

export default ExpensesFilter
