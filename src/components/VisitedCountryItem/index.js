import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, onClickRemove} = props
  const {id, name, imageUrl} = countryDetails

  const onRemove = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-thumbnail" />
      <div className="visited-card-footer">
        <p className="visited-country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
