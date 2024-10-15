import React, { useState } from 'react';
import { FolderOpen, Map, LineChart, ChevronDown, ChevronRight, Menu } from 'lucide-react';

const MenuItem = ({ icon: Icon, label, children, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        className="flex items-center justify-between hover:bg-blue-700 p-2 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <span>{label}</span>
        </div>
        {children && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </div>
      {children && isOpen && (
        <ul className="ml-6 mt-2 space-y-2">
          {children.map((child, index) => (
            <li
              key={index}
              className="hover:bg-blue-700 p-2 rounded cursor-pointer"
              onClick={() => onItemClick(child)}
            >
              {child}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ onProjectSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`bg-blue-600 text-white p-6 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-2xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>项目导航</h1>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded hover:bg-blue-700">
          <Menu size={24} />
        </button>
      </div>
      <nav className={isCollapsed ? 'hidden' : 'block'}>
        <ul className="space-y-4">
          <MenuItem
            icon={FolderOpen}
            label="项目选择"
            children={['项目A', '项目B', '项目C']}
            onItemClick={onProjectSelect}
          />
          <MenuItem icon={Map} label="区间选择" children={['区间1', '区间2', '区间3']} onItemClick={() => {}} />
          <MenuItem icon={LineChart} label="线路选择" children={['线路X', '线路Y', '线路Z']} onItemClick={() => {}} />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;