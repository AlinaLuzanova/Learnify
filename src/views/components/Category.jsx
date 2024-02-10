const React = require('react');
module.exports = function Category({category, subcategories}){
    return(
        <div className="btn-group dropend" id='btn-group'>

            <button type="button" className="btn btn-success" id='firstBTNCat'>
                <a href={`/categories/${category.id}`} className='categoryLink'>{category.name}</a>
            </button>
            <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown" aria-expanded="false">
            </button>
            <div id="div">
            <ul className="dropdown-menu">
                {subcategories.map((subcategory)=>(
                    <li key={subcategory.id}>
                        <a href={`/categories/${category.id}/${subcategory.id}`} className="dropdown-item">
                            {subcategory.name}
                            <hr/>
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </div>

    )
}
