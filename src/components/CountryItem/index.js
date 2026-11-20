import './index.css'

const CountryItem = props => {
  const {countryDetails, onClickVisit} = props
  const {id, name, isVisited} = countryDetails

  const onVisit = () => {
    onClickVisit(id)
  }

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" className="visit-button" onClick={onVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
