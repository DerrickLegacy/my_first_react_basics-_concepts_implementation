import { Card } from "react-bootstrap";
const SearchListItems = ({ results }) => {
    return ( 
        <div>
            <Card style={{marginLeft:'auto', marginRight:'auto'}} className="search-results">
                <div>
                    <em>Resources Found</em> <hr/>
                    {results.map((result) => (
                        <div
                            className="result-item"
                            style={{ color: "blue" }}
                            key={result.id}
                        >
                            {result.name}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
     );
}
 
export default SearchListItems;