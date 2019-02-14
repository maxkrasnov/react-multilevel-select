# React Multilevel Select Component

![](https://img.shields.io/npm/v/react-multilevel-select.svg?style=popout-square)
![](https://img.shields.io/npm/dm/react-multilevel-select.svg?style=popout-square) 
![](https://img.shields.io/github/last-commit/maxkrasnov/react-multilevel-select.svg?style=popout-square)
![](https://img.shields.io/npm/l/react-multilevel-select.svg?style=popout-square)

Component for building an infinity multilevel html select element as avito.ru category selector:


![](https://static.maxkrasnov.ru/react-multilevel-select.png)

 
See **/example/** on repository.


### Props:



| Prop          | Description   | Default  |
| ------------- |:-------------:| -----:|
| items      | ``` [{ id: 1, name: 'Label 1', disabled: true, children: [{ id: 1, name: 'Label 2' }] }] ``` | - |
| onChange      | -      |   - |
| value | -      |    - |
| spaceSymbol |    Symbol before option label. Default two spaces   |    ```\u00A0\u00A0``` |
| loadingText | Loading text      |    Загрузка... |
| className | Root class name for select and option      |    r-multilevel |




### Example:



```js
// import 
import MultilevelSelect from 'react-multilevel-select';


// use

<MultilevelSelect 
        items={[
            {
                id: 1, 
                name: 'Value 1',
                disabled: true,
                children: [
                    {
                        id: 2, 
                        name: 'Sub Value 1',
                        children: [
                            {
                                id: 3, 
                                name: 'Sub Sub Value 1',
                            }
                        ]
                    }
                ]
            }
        ]}
        onChange={(e) => console.log(e)}
/>


```
