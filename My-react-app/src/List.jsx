import PropTypes from 'prop-types'
function List(props){
    // const fruits = [{id: 1,name:"apple", calories: 90},
    //                 {id: 2,name:"orange", calories: 120},
    //                 {id: 3,name:"banana",calories: 200}];

    // fruits.sort((a, b)=> a.name.localeCompare(b.name));
    // fruits.sort((a, b)=> b.name.localeCompare(a.name));
    // fruits.sort((a,b)=> a.calories - b.calories);
    // fruits.sort((a,b)=> b.calories - a.calories);

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

    // const listItems = highCalFruit.map(highCalFruit => <li key={highCalFruit.id}>
    //                                                  {highCalFruit.name}: &nbsp;
    //                                                  <b>{highCalFruit.calories}</b></li>);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.name}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-elements">{listItems}</ol>
    </>);

}
List.PropTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                               name: PropTypes.string,
                                               calories: PropTypes.number}))
}


List.defaultProps = {
    category: "Category",
    items: [],
}
export default List