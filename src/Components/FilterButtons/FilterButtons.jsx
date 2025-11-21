import "../FilterButtons/FilterButtons.sass"

export default function FilterButtons() {
    

    return (
        <div className="filter-buttons">
            <button className="filter-buttons__button">
                Cats
            </button>

            <button className="filter-buttons__button">
                Dogs
            </button>

            <button className="filter-buttons__button">
                Birds
            </button>
            
            <button className="filter-buttons__button">
                Other
            </button>
        </div>
    )
}