import { useState } from "react"
import "../FilterButtons/FilterButtons.sass"

const filters = [
    'Cats',
    'Dogs',
    'Birds',
    'Other'
]

export default function FilterButtons() {
    const [activeFilter, setActiveFilter] = useState('Cats')

    const handleFilterCheck = (pets) => {
        setActiveFilter(pets)
    }

    return (
        <div className="filter-buttons">
            {filters.map((filter) => {
                <button 
                    key={filter}
                    className={`filter-buttons__button ${activeFilter === filter ? 'filter-buttons__button--active' : ''}`}
                    onClick={() => handleFilterCheck(filter)}
                >
                    {filter}
                </button>
            })}
        </div>
    )
}