const TagItem = props => {
  const {eachDetails} = props
  const {displayText} = eachDetails
  return (
    <li>
      <button type="button" className="tag-button">
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
