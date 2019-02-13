import React from 'react';
import ReactDOM from 'react-dom';

import MultilevelSelect from '../src';


class ExampleClass extends React.Component{
    
    state = {
        data: null
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ data: [{
                id: 1,
                name: 'Отдел кадров',
                children:
                    [{
                        id: 3,
                        name: 'Москва',
                        children:
                            [
                                {
                                    id: 88,
                                    name: 'САО',
                                    children: [
                                        {
                                            id: 89,
                                            name: 'Бескудниковский бульвар',
                                        }
                                    ]
                                }
                            ]
                    },
                        {
                            id: 9,
                            name: 'Сочи',
                            children:
                                [
                                    {
                                        id: 9991,
                                        name: 'СТО',
                                    }
                                ]
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Отдел разработки',
                    children:
                        [
                            {
                                id: 99,
                                name: 'Санкт-Петербург',
                                children: [
                                    {
                                        id: 91,
                                        name: 'Кировоградская',
                                    }
                                ]
                            }
                        ]
                },
                    {
                        id: 3,
                        name: 'Отдел маркетинга',
                        children:
                            [
                                {
                                    id: 101,
                                    name: 'Самара',
                                    children: [
                                        {
                                            id: 99,
                                            name: 'Шоссе Энтузиастов',
                                        }
                                    ]
                                }
                            ]
                    }
                ],
            })
        }, 1000)
    }
    
    render() {
        console.log(this.state.data)
        return <MultilevelSelect loadingText={'Loading...'} items={this.state.data}/>
    }
}

const App = () => (
    <ExampleClass/>
);

ReactDOM.render(<App />, document.getElementById('root'));
