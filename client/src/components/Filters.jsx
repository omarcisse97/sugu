import { useState } from "react";
const Filters = (props) => {
    const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];
    const [selectedCat, setSelectedCat] = useState(props.category);
    const mapCategoriesSelection = () => {
        return categories.map((value, index) => (
            <option value={value} onSelect={() => { setSelectedCat(value)}}>{value}</option>
        ));
    }
    return (
        <div className="filter-section">
            <h4 className="mb-3">Filters</h4>
            <div clasNames="mb-3">
                <label for="category" class="form-label">Category</label>
                <select className="form-select" id="category">
                    {mapCategoriesSelection()}
                </select>
            </div>
            <div className="mb-3">
                <label for="priceRange" className="form-label">Price Range</label>
                <input type="range" className="form-range" id="priceRange" min="0" max="1000" />
                <div class="d-flex justify-content-between">
                    <span>$0</span>
                    <span>$1000</span>
                </div>
            </div>
            <button className="btn btn-primary w-100" id="applyFilters">Apply Filters</button>
        </div>
    );
};
export default Filters;