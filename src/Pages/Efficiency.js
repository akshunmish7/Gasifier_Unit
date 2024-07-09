import React from 'react'
import { useState } from 'react';
import backgroundImage from '../gasifier_img.png';

const Efficiency = () => {
  // primary variable
  const [rawgas, setrawgas] = useState();
  const [coalfeed, setcoalfeed] = useState();
  const [ashoutlet,setashoutlet]=useState();
  const [vm,setvm]=useState();
  const [hpsteam,sethpsteam]=useState();
  const [co2, setco2] = useState();
  const [ch4, setch4] = useState();
  const [co, setco] = useState();
  const [ohc, setohc] = useState();
  const [coalcv, setcoalcv] = useState(4900);
  const [rawgascv, setrawgascv] = useState(3494.89);
  const [hpsteamcv, sethpsteamcv] = useState(700);
  const [energy_efficiency, setenergy_efficiency] = useState(null);
  const [carboneff, setcarboneff] = useState(null);


  // carbon balance calculator functions

  function complete_call(){
    const carbon_in_coal = coalfeed * 474.7;
    const carbon_in_ash = ashoutlet * 30;
    const carbon_vm = vm * coalfeed * 1.5;
    const carbon_co2 = (co2 * 1200 * rawgas) / 224000;
    const carbon_co = (co * 1200 * rawgas) / 224000;
    const carbon_ch4 = (ch4 * 1200 * rawgas) / 224000;
    const carbon_ohc = (ohc * 1200 * rawgas) / 224000;

    const total_carbon_out = carbon_vm + carbon_in_ash + carbon_ch4 + carbon_co + carbon_co2 + carbon_ohc;
    const carbonefficiency = (total_carbon_out * 100) / carbon_in_coal;

    // Calculate energy values
    const rawgas_heat = rawgas * 0.9 * rawgascv;
    const coal_heat = coalfeed * 1000 * coalcv;
    const hpsteam_heat = hpsteam * hpsteamcv;

    const energyefficiency = (rawgas_heat * 100) / (coal_heat + hpsteam_heat);

    setcarboneff(carbonefficiency);
    setenergy_efficiency(energyefficiency);
  }

  return (
    <div class="flex h-screen justify-center bg-indigo-200 overflow-auto" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
        <div class="w-full mt-7 mb-7 max-w-xl m-auto bg-indigo-100 rounded p-5 overflow-y-scroll n-scrollbar" style={{backgroundColor: 'rgba(224, 231, 255,0.9)'}}>
        <h2 className='text-l font-semibold block text-center mb-4 '>Carbon and Energy Efficiency Calculator</h2>
        <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="mb-2">
              <label for="Raw-gas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Raw Gas(Nm^3)</label>
              <input type="number" id="Raw-gas" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:bord
              er-blue-500 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500"
              value={rawgas}
              onChange={(e)=>{setrawgas(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="coal-feed" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Coal Feed (MT)</label>
              <input type="number" id="coal-feed" class="bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={coalfeed}
              onChange={(e)=>{setcoalfeed(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="ash" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Ash Outlet (MT)</label>
              <input type="number" id="ash" class="bg-gray-50 border 
              border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={ashoutlet}
              onChange={(e)=>{setashoutlet(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="volatile-matter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Volatile Matter (%)</label>
              <input type="number" id="volatile-matter" class="bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={vm}
                onChange={(e)=>{setvm(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="hp-steam" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">HP Steam (kg)</label>
              <input type="number" id="hp-steam" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
                value={hpsteam}
                onChange={(e)=>{sethpsteam(e.target.value)}}
              />
          </div>
        </div>
        <h2 className='text-l font-semibold block text-center mb-6' >Raw gas Data</h2>
        <div class="grid gap-6 mb-4 md:grid-cols-2">
          <div class="mb-2">
              <label for="co2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CO2(Vol%)</label>
              <input type="number" id="co2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={co2}
                onChange={(e)=>{setco2(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="co" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CO(Vol%)</label>
              <input type="number" id="co" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={co}
              onChange={(e)=>{setco(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="ch4" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">CH4(Vol%)</label>
              <input type="number" id="ch4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={ch4}
              onChange={(e)=>{setch4(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="ohc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">OHC(Vol%)</label>
              <input type="number" id="ohc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={ohc}
              onChange={(e)=>{setohc(e.target.value)}}
              />
          </div>
        </div>
        <h2 className='text-l font-semibold block text-center mb-6' >Variable Values</h2>
        <div class="grid gap-6 mb-4 md:grid-cols-2">
          <div class="mb-2">
              <label for="coalcv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Coal Calorific Value (Kcal/kg)</label>
              <input type="number" id="coalcv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={coalcv}
                onChange={(e)=>{setcoalcv(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="rgcv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Raw Gas Calorific Value (Kcal/kg)</label>
              <input type="number" id="rgcv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={rawgascv}
              onChange={(e)=>{setrawgascv(e.target.value)}}
              />
          </div>
          <div class="mb-2">
              <label for="hpcv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">HP steam Calorific Value (kcal/kg)</label>
              <input type="number" id="hpcv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={hpsteamcv}
              onChange={(e)=>{sethpsteamcv(e.target.value)}}
              />
          </div>
        </div>
        </form>

        
        <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded p-6  
        bg-transparentd hover:text-white border border-blue-500 hover:border-transparent" onClick={complete_call}>Calculate</button>
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Results</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Energy Efficiency:</span>
              <span className="font-bold text-indigo-700">{energy_efficiency}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Carbon Efficiency:</span>
              <span className="font-bold text-indigo-700">{carboneff}%</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Efficiency