import { useEffect, useState, useRef } from 'react';

const allColors = {
  green: 'border-[#6ec17f] bg-gradient-line-green',
  red: 'border-[#c16e6e] bg-gradient-line-red',
  blue: 'border-[#6e93c1] bg-gradient-line-blue',
  yellow: 'border-[#adc16e] bg-gradient-line-yellow',
  purple: 'border-[#866ec1] bg-gradient-line-purple',
  gray: 'border-[#3a3a3a] bg-gradient-line-gray',
}

function Block({color, children, text, className, ...props}){


  return(
    <div {...props} className={`${className} ${allColors[color]} flex opacity-60 hover:opacity-80 transition-opacity duration-300 border-[2px] p-3 rounded-md w-[300px] justify-center cursor-pointer`}>
        {text ?
          <p className='bg-[#1a1a1a] bg-opacity-80 border-[#1a1a1a] px-2 py-1 border-0 rounded-md'>
            {text}
          </p>
          :
          children
        }
    </div>
  )
}

function App() {
  const [state, setState] = useState('p1')
  const [youDay, setYouDay] = useState(false)
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [clickedBlocks, setClickedBlocks] = useState({});
  const [blockData, setBlockData] = useState({});
  const textareaRef = useRef(null);
  const arrTasks = [{
    hour: 8,
    name: 'test',
    description: 'test descripction',
    icons: '',
    color: 'green'
  }]

  function handleGenerateDay(){
    //e.preventDefault();
    if (parseInt(endTime) <= parseInt(startTime)) {
      console.log("La hora final debe ser mayor que la hora de inicio");
    } else {
      setState('p2');
      console.log("Las horas seleccionadas son válidas");
    }
  }

  function cleanApp(){
    setYouDay(false)
    setState('p1')
  }

  function addTask(hour, descripction, color){
    const task = {
      hour: hour,
      name: '',
      description: descripction,
      icons: '',
      color: color
    }
    arrTasks.push(task)
  }

  function findTask(hour){
    let task = false
    if(arrTasks.length > 0){
      const resp = arrTasks.find(task => task.hour === hour)
      return resp
    }
    return task
  }

  function activeTask(){
    console.log('active task')
  }



  return (
    <div className='w-full h-screen items-center flex flex-col'>
      <div className='fixed -z-10 min-h-screen left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2b2e] to-[#1d1e20]'></div>
      
      <div className="absolute mt-24 text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Set Your Day
        </span>
      </div>

        <div className={`absolute mt-48 transition-all duration-300 ease-in-out ${youDay ? 'w-64 h-72' : 'h-32 w-32'} ${state === 'p1' ? 'opacity-100 z-20' : 'opacity-0 invisible'} flex justify-center border-[1px] rounded-md p-3 border-gray-50/10 bg-[#252628] text-gray-50/30`}>
              
              {/*btn add (+) element */}
              <div className='absolute pt-[24px]'>
                <button className={`transition-opacity duration-300 delay-300 ease-in-out ${youDay ? 'opacity-0 invisible' : 'opacity-100 z-20'}`} onClick={() => setYouDay(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/*Details new card*/}
              <div className={`w-full transition-opacity duration-300 delay-300 ease-in-out flex flex-col gap-3 ${youDay ? 'opacity-100 z-20' : 'opacity-0 invisible'}`}>
                {/*header + close btn*/}
                <div className='border-b-[1px] border-gray-50/10 flex justify-end -mt-2 pb-1'>
                  <button className='hover:opacity-80 border-[1px] text-sm border-gray-50/10 p-1 rounded-full' onClick={() => setYouDay(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {/*form*/}
                <label className='text-white/50 mt-2'>Template Name</label>
                <input type='text' className='placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-transparent border-[1px] text-sm text-white/50 py-1 px-2 border-gray-50/10 rounded-sm' placeholder='Normal Day' />
                  
                <label className='text-white/50'>Hours</label>
                <div className='flex gap-3'>
                  <select value={startTime} onChange={(e) => setStartTime(e.target.value)} className='scrollbar1 w-full placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-transparent border-[1px] text-sm text-white/50 py-1 px-2 border-gray-50/10 rounded-sm'>
                      {Array.from({length: 24}, (v, i) => (
                        <option key={i} value={i}>
                          {i}:00
                        </option>
                      ))}
                  </select>
                  <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className='scrollbar1 w-full placeholder:text-white/30 placeholder:font-light focus:outline-none focus:ring-0 focus:bg-[#313236] bg-transparent border-[1px] text-sm text-white/50 py-1 px-2 border-gray-50/10 rounded-sm'>
                      {Array.from({length: 24}, (v, i) => (
                        <option className='hover:bg-[#2a2b2e]' key={i} value={i}>
                          {i}:00
                        </option>
                      ))}
                  </select>
                </div>
                
                <div className='flex my-auto mx-auto'>
                  <button className='border-[1px] text-sm py-1 border-gray-50/10 px-2 rounded-md' onClick={() => handleGenerateDay()}>Continue</button>
                </div>
              </div>
            
        </div>

       
        <div className={`transition-opacity duration-300 delay-300 ease-in-out ${state === 'p2' ? 'opacity-100 z-20' : 'opacity-0 invisible'} absolute mt-48 flex flex-col border-0 border-white p-6 gap-3`}>
            <div className='flex gap-3'>
              <p>{startTime}:00</p>
              <p>{endTime}:00</p>
              <p></p>
              <button onClick={() => cleanApp()}>Borrar</button>
            </div>
          <div className='flex w-full gap-3'>
            <div className='flex flex-col gap-3 border-0 border-white'>
              <div className='flex flex-col justify-around px-3 h-full border-[1px] border-gray-50/10 bg-[#1d1e20] rounded-md'>
                {Array.from({length: (endTime - startTime + 1)}, (v, i) => (
                  <div key={i} className=''>
                    <span>{i + parseInt(startTime)}: 00</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-3 border-0 border-white'>
              {Array.from({length: (endTime - startTime + 1) * 2}, (v, i) => (
                  <div key={i} className=''>
                    
                      {!findTask(i + parseInt(startTime)) ? 
                        <Block className={`transition-all duration-300 delay-300 ease-in-out ${blockData[i]?.status === 'editing' ? 'h-32' : 'h-[52px]'}`} color={blockData[i]?.color || 'gray'}>
                        
                          <div className={`absolute flex flex-col transition-opacity duration-300 delay-300 ease-in-out ${clickedBlocks[i] ? 'opacity-100 z-20' : 'opacity-0 invisible'}`}>
                            <textarea
                                ref={textareaRef}
                                type="text" 
                                className={`${blockData[i]?.status !== 'saved' ? '' : 'bg-opacity-80 cursor-pointer'} px-2 py-1 rounded-md focus:outline-none bg-[#1a1a1a]  border-[#1a1a1a]`}
                                value={blockData[i]?.text || ''}
                                disabled={blockData[i]?.status === 'saved'}
                                onChange={(e) => setBlockData({...blockData, [i]: {...blockData[i], text: e.target.value}})}
                              />
                              {blockData[i]?.status !== 'saved' && (
                                <div className={`flex justify-between items-center text-sm`}>
                                  <div className='flex gap-3'>
                                    {['green', 'red', 'blue', 'yellow'].map((color) => (
                                      <button 
                                        key={color}
                                        className={`bg-[#1d1e20] rounded-md border-2 self-start mt-3 px-2 py-1 w-6 h-6 opacity-80 hover:opacity-100 ${allColors[color]}`}
                                        onClick={() => setBlockData({...blockData, [i]: {...blockData[i], color}})}
                                      ></button>
                                    ))}
                                  </div>
                                  <div className='flex gap-3'>
                                    <button 
                                      className='rounded-md self-end mt-3 px-2 py-1 bg-blue-600 hover:bg-blue-500'
                                      onClick={() => {
                                        setBlockData({...blockData, [i]: {...blockData[i], status: 'saved'}});
                                      }}
                                    >
                                      Save
                                    </button>
                                    <button 
                                      className='rounded-md self-end mt-3 px-2 py-1 bg-red-600 hover:bg-red-500'
                                      onClick={() => {
                                        setBlockData({...blockData, [i]: {...blockData[i], text: '', status: '',   color: 'gray'}});
                                        setClickedBlocks({...clickedBlocks, [i]: false});
                                      }}
                                    >
                                      Discard
                                    </button>
                                  </div>
                                </div>
                              )}
                          </div>
                        
                          <div className=''>
                            <svg className={`w-6 h-6 opacity-50 hover:opacity-90 transition-opacity duration-300 delay-300 ease-in-out ${clickedBlocks[i] ? 'opacity-0 invisible' : 'opacity-100 z-20'}`} onClick={() => {
                              setBlockData({...blockData, [i]: {...blockData[i], status: 'editing'}});
                              setClickedBlocks({...clickedBlocks, [i]: true});
                            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                            </svg>
                          </div>
                        
                      </Block>
                      :
                        <Block color={findTask(i + parseInt(startTime)).color} 
                              text={'First block without much info, maybe some day i can put more.'} />
                      }
                  </div>
              ))}
            </div>

            {/*block test*/}
            {/*<div className='flex flex-col gap-3 border-2 border-white'>
              <div>
                <Block color={'green'} text={'Test block green'} />
              </div>
              <div>
                <Block color={'red'} text={'Test block red'} />
              </div>
              <div>
                <Block color={'blue'} text={'Test block blue'} />
              </div>
              <div>
                <Block color={'yellow'} text={'Test block yellow'} />
              </div>
              <div>
                <Block color={'purple'} text={'Test block purple'} />
              </div>
              </div>*/}

          </div>
        </div>
      
      
    </div>
  )
}

export default App

