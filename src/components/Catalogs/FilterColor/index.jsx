import CheckBox from '../../CheckBox'
import './FilterColor.css'
import dataFilterColor from './dataFilterColor'

const FilterColor = ({getColorFilter,checkedItems}) => {
return (
    
    <div className='filter-color-wrapper'>
            <div className='filter-color-name'>Цвет</div>
            <div className='filter-color'>
                {dataFilterColor.map((item) => 
                <CheckBox
                inputName={item.inputName}
                inputId={item.inputId}
                labelHtmlFor={item.labelHtmlFor}
                xLinkHref={item.xLinkHref}
                symbolId={item.symbolId}
                onClick={() => getColorFilter(item.inputName)}
                isChecked={checkedItems.includes(item.inputName)}
                key={item.id}
                />
                )}
            </div>
    </div>
   
)
}

export default FilterColor