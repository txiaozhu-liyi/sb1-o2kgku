import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BarChart from './components/BarChart';
import CircularDisplay from './components/CircularDisplay';
import LineChart from './components/LineChart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectTable from './components/ProjectTable';

const projectAData = [
  { name: '项目A-1', manager: '张三', startDate: '2024-01-01', endDate: '2024-06-30', status: '进行中' },
  { name: '项目A-2', manager: '李四', startDate: '2024-02-15', endDate: '2024-08-31', status: '计划中' },
  { name: '项目A-3', manager: '王五', startDate: '2023-10-01', endDate: '2024-03-31', status: '已完成' },
  { name: '项目A-4', manager: '赵六', startDate: '2024-03-01', endDate: '2024-09-30', status: '进行中' },
  { name: '项目A-5', manager: '钱七', startDate: '2024-04-15', endDate: '2024-10-15', status: '计划中' },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onProjectSelect={handleProjectSelect} />
        <main className="flex-1 p-4 overflow-auto">
          <h1 className="text-3xl font-bold mb-4">Liyi Page</h1>
          {selectedProject === '项目A' ? (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">项目A 数据</h2>
              <ProjectTable data={projectAData} />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg h-[400px]">
                <h2 className="text-xl font-semibold mb-2">3D Bar Chart</h2>
                <div className="h-[350px]">
                  <BarChart />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg h-[400px]">
                <h2 className="text-xl font-semibold mb-2">Shield Machine Data</h2>
                <div className="h-[350px]">
                  <CircularDisplay />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-2 bg-white p-4 rounded-lg shadow-lg overflow-x-auto">
                <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
                <LineChart />
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;