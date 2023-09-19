const React = require('react')

class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return(
                            <li>
                                The {' '}
                                <a href={`/vegetables/${i}`}>
                                    {vegetable.name}
                                </a>{` `} is {vegetable.color} <br></br>
                                {vegetable.readyToEat ? `It is ready to eat` : `It is NOT ready to eat`}
                                <br />
                            </li>
                        )
                    })}
                </ul>
                <a href='/vegetables/new'>Create New Vegetable</a>
            </div>
        )
    }
}

module.exports = Index