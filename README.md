# React Multilevel Select Component


Component for building an infinity multilevel <select> element as avito.ru category selector:


![](https://static.maxkrasnov.ru/react-multilevel-select.png)

 
See **/example/** on repository.


### Props:



| Prop          | Description   | Default  |
| ------------- |:-------------:| -----:|
| items      | ``` [{ id: 1, name: 'Label 1', children: [{ id: 1, name: 'Label 2' }] }] ``` | - |
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

<MultilevelSelect items={[
    {
        id: 1, 
        name: 'Value 1',
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
]}/>


```
