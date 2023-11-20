import React from 'react'

function InputBox({
    lable,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency = "usd",
    amountDisable= false,
    currencyDisable = false,
    className ="",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
        <div className="w-1-2">
            <label className='text-black/40 md-2 inline-block '> {lable}</label>
            <input 
            type="number" 
            className='outline-none w-full bg-transparent py-1.5 '
            placeholder='amount'
            disabled={amountDisable}
            value={amount} 
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full "> Currency Type</p>
            <select name="" id="" className="rounded-lg bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
            >
                {currencyOptions.map((ct)=>(
                    <option key={ct} value={ct}>{ct}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox