import React, {Component} from 'react'

import Article from './Article'
import Ad from './Ad'
import Stories from './Stories'


class MainContent extends Component{
    render(){
        return (
            <main className="expanded row">
                <Article />
                <Ad />
                <Stories />
            </main>
        )
    }
}
export default MainContent