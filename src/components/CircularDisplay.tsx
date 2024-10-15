import React from 'react';
import { Circle } from 'lucide-react';

const CircularDisplay = () => {
  const dataGroups = [
    { label: 'A', values: [{ name: '推进速度', value: '25.6' }, { name: '刀盘转速', value: '30.2' }, { name: '推进压力', value: '28.9' }] },
    { label: 'B', values: [{ name: '推进速度', value: '26.1' }, { name: '刀盘转速', value: '29.8' }, { name: '推进压力', value: '27.5' }] },
    { label: 'C', values: [{ name: '推进速度', value: '24.9' }, { name: '刀盘转速', value: '31.3' }, { name: '推进压力', value: '29.1' }] },
    { label: 'D', values: [{ name: '推进速度', value: '27.3' }, { name: '刀盘转速', value: '32.0' }, { name: '推进压力', value: '30.5' }] },
    { label: 'E', values: [{ name: '推进速度', value: '23.8' }, { name: '刀盘转速', value: '28.7' }, { name: '推进压力', value: '26.4' }] },
    { label: 'F', values: [{ name: '推进速度', value: '29.5' }, { name: '刀盘转速', value: '33.8' }, { name: '推进压力', value: '31.7' }] },
  ];

  const centerData = [
    { label: '推进速度', value: '23.0 mm/min' },
    { label: '刀盘转速', value: '1.6 r/min' },
    { label: '推进压力', value: '2971 kN' },
    { label: '扭矩', value: '8046 kN·m' },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative w-[480px] h-[480px]">
        {/* Outer circle */}
        <div className="absolute inset-0 border-[5px] border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        {/* Inner circle */}
        <div className="absolute inset-[15px] border-[5px] border-blue-300 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.3)]"></div>
        
        {/* Data groups */}
        {dataGroups.map((group, index) => {
          const angle = (index / dataGroups.length) * 360;
          const radius = 230;
          
          return (
            <div key={index}>
              {/* Red dots */}
              {group.values.map((value, dotIndex) => {
                const dotAngle = angle + (dotIndex - 1) * 5;
                const x = 240 + radius * Math.cos((dotAngle - 90) * (Math.PI / 180));
                const y = 240 + radius * Math.sin((dotAngle - 90) * (Math.PI / 180));
                
                return (
                  <div key={`dot-${dotIndex}`} className="absolute" style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}>
                    <Circle className="text-red-500 w-5 h-5 fill-current" />
                  </div>
                );
              })}
              
              {/* Data display box */}
              <div className="absolute px-2 py-1 bg-white rounded-lg shadow-md text-center transform -translate-x-1/2 -translate-y-1/2"
                   style={{
                     left: `${240 + (radius + 48) * Math.cos((angle - 90) * (Math.PI / 180))}px`,
                     top: `${240 + (radius + 48) * Math.sin((angle - 90) * (Math.PI / 180))}px`,
                     transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                     width: '100px',
                   }}>
                <div className="text-base font-bold mb-1 text-blue-600">{group.label}</div>
                {group.values.map((item, i) => (
                  <div key={i} className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="font-medium text-gray-600">{item.name}: </span>
                    <span className="text-gray-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* Center information */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          {centerData.map((item, index) => (
            <div key={index} className="bg-white px-3 py-1 rounded-lg shadow-md text-center w-32">
              <div className="text-xs font-medium text-gray-600">{item.label}</div>
              <div className="text-sm font-bold text-blue-600">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularDisplay;