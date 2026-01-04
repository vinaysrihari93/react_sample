import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingDown, Users, AlertCircle, Activity } from 'lucide-react';

const MalnutritionDashboard = () => {
  const [selectedState, setSelectedState] = useState('National Average');
  const [selectedMetric, setSelectedMetric] = useState('stunting');

  // Data for stunting, wasting, and underweight by state
  const stateData = [
    { state: 'Bihar', stunting: 42.9, wasting: 22.9, underweight: 41.0 },
    { state: 'Uttar Pradesh', stunting: 39.7, wasting: 17.9, underweight: 39.5 },
    { state: 'Jharkhand', stunting: 39.6, wasting: 22.6, underweight: 40.5 },
    { state: 'Madhya Pradesh', stunting: 35.8, wasting: 19.2, underweight: 36.0 },
    { state: 'Meghalaya', stunting: 46.5, wasting: 15.3, underweight: 41.8 },
    { state: 'Gujarat', stunting: 39.0, wasting: 26.4, underweight: 39.7 },
    { state: 'Kerala', stunting: 19.7, wasting: 15.7, underweight: 16.1 },
    { state: 'Punjab', stunting: 25.7, wasting: 15.6, underweight: 21.6 },
  ];

  // National overview data
  const nationalData = [
    { category: 'Stunting', value: 35.5, color: '#ef4444' },
    { category: 'Wasting', value: 19.3, color: '#f59e0b' },
    { category: 'Underweight', value: 32.1, color: '#8b5cf6' },
  ];

  // Factors affecting stunting
  const stuntingFactors = [
    { factor: 'Poor Nutrition', impact: 85, category: 'Dietary' },
    { factor: 'Inadequate Sanitation', impact: 72, category: 'Environmental' },
    { factor: 'Lack of Clean Water', impact: 68, category: 'Environmental' },
    { factor: 'Low Birth Weight', impact: 78, category: 'Health' },
    { factor: 'Maternal Malnutrition', impact: 80, category: 'Health' },
    { factor: 'Infections & Diseases', impact: 70, category: 'Health' },
    { factor: 'Poverty', impact: 75, category: 'Socioeconomic' },
    { factor: 'Lack of Education', impact: 65, category: 'Socioeconomic' },
  ];

  // Age-wise malnutrition prevalence
  const ageWiseData = [
    { age: '0-6 months', stunting: 15.2, wasting: 20.5, underweight: 18.3 },
    { age: '6-12 months', stunting: 28.6, wasting: 21.4, underweight: 26.8 },
    { age: '12-24 months', stunting: 42.3, wasting: 19.8, underweight: 36.5 },
    { age: '24-36 months', stunting: 45.7, wasting: 17.2, underweight: 38.2 },
    { age: '36-48 months', stunting: 42.1, wasting: 16.5, underweight: 35.9 },
    { age: '48-60 months', stunting: 38.4, wasting: 15.8, underweight: 32.7 },
  ];

  // Radar chart data for contributing factors
  const radarData = [
    { subject: 'Nutrition', value: 85 },
    { subject: 'Sanitation', value: 72 },
    { subject: 'Healthcare', value: 76 },
    { subject: 'Education', value: 65 },
    { subject: 'Water Access', value: 68 },
    { subject: 'Income', value: 75 },
  ];

  const COLORS = ['#ef4444', '#f59e0b', '#8b5cf6', '#06b6d4', '#10b981', '#ec4899'];
  
  // Professional color palette for impact factors - sophisticated and business-appropriate
  const IMPACT_COLORS = [
    '#2563eb', // Professional Blue
    '#7c3aed', // Rich Purple
    '#0891b2', // Corporate Teal
    '#059669', // Growth Green
    '#dc2626', // Alert Red
    '#ea580c', // Vibrant Orange
    '#4f46e5', // Deep Indigo
    '#a855f7', // Bright Violet
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header - Professional Version */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl shadow-2xl p-8 mb-8 border border-indigo-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
                  India Malnutrition Dashboard
                </h1>
              </div>
              <p className="text-white text-lg font-medium ml-16 drop-shadow">
                Comprehensive Analysis of Child Malnutrition Indicators
              </p>
              <div className="flex items-center gap-4 ml-16 mt-2">
                <p className="text-indigo-100 text-sm">
                  📊 Children Under 5 Years
                </p>
                <span className="text-indigo-200">•</span>
                <p className="text-indigo-100 text-sm">
                  📍 National Family Health Survey (NFHS)
                </p>
                <span className="text-indigo-200">•</span>
                <p className="text-indigo-100 text-sm">
                  📅 2024 Report
                </p>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-30">
              <div className="text-white text-center">
                <p className="text-xs font-semibold opacity-90 uppercase tracking-wider mb-1">Survey Year</p>
                <p className="text-4xl font-bold">2024</p>
                <p className="text-xs opacity-80 mt-1">NFHS-5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {nationalData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 hover:shadow-2xl transition-shadow duration-300" style={{ borderColor: item.color }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">{item.category}</p>
                  <p className="text-4xl font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </p>
                  <p className="text-gray-500 text-xs mt-2">National Average</p>
                </div>
                <AlertCircle className="w-12 h-12 opacity-20" style={{ color: item.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Donut Chart Section - Age-wise with Dropdown Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              Age Group-wise Malnutrition Prevalence
            </h2>
            
            {/* Dropdown Selector */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-600">Select Indicator:</label>
              <select 
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-4 py-2 border-2 border-indigo-300 rounded-lg text-gray-700 font-semibold bg-white hover:border-indigo-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all cursor-pointer shadow-sm"
              >
                <option value="stunting">Stunting</option>
                <option value="wasting">Wasting</option>
                <option value="underweight">Underweight</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Donut Chart with Labels */}
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={ageWiseData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ age, stunting, wasting, underweight }) => {
                      const value = selectedMetric === 'stunting' ? stunting : 
                                   selectedMetric === 'wasting' ? wasting : underweight;
                      return `${age}: ${value}%`;
                    }}
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={3}
                    dataKey={selectedMetric}
                  >
                    {ageWiseData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={
                          selectedMetric === 'stunting' 
                            ? ['#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b', '#10b981', '#06b6d4'][index % 6]
                            : selectedMetric === 'wasting'
                            ? ['#f59e0b', '#fb923c', '#fdba74', '#fcd34d', '#fde047', '#fef08a'][index % 6]
                            : ['#8b5cf6', '#a78bfa', '#c4b5fd', '#818cf8', '#6366f1', '#4f46e5'][index % 6]
                        } 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value) => [`${value}%`, selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1) + ' Rate']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Age Group Stats */}
            <div className="space-y-4">
              <div 
                className={`rounded-lg p-6 ${
                  selectedMetric === 'stunting' ? 'bg-gradient-to-r from-red-50 to-orange-50' :
                  selectedMetric === 'wasting' ? 'bg-gradient-to-r from-orange-50 to-amber-50' :
                  'bg-gradient-to-r from-purple-50 to-indigo-50'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4 capitalize">
                  {selectedMetric} by Age Group
                </h3>
                <div className="space-y-3">
                  {ageWiseData.map((item, index) => {
                    const value = item[selectedMetric];
                    const color = selectedMetric === 'stunting' 
                      ? ['#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b', '#10b981', '#06b6d4'][index % 6]
                      : selectedMetric === 'wasting'
                      ? ['#f59e0b', '#fb923c', '#fdba74', '#fcd34d', '#fde047', '#fef08a'][index % 6]
                      : ['#8b5cf6', '#a78bfa', '#c4b5fd', '#818cf8', '#6366f1', '#4f46e5'][index % 6];
                    
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full flex-shrink-0" 
                            style={{ backgroundColor: color }}
                          ></div>
                          <span className="font-semibold text-gray-700">{item.age}</span>
                        </div>
                        <div className="text-right">
                          <span 
                            className="text-2xl font-bold" 
                            style={{ color: color }}
                          >
                            {value}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Key Insight */}
              <div 
                className={`rounded-lg p-4 border-l-4 ${
                  selectedMetric === 'stunting' ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-500' :
                  selectedMetric === 'wasting' ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-500' :
                  'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-500'
                }`}
              >
                <p className="text-sm text-gray-700 mb-2">
                  <span className={`font-bold ${
                    selectedMetric === 'stunting' ? 'text-amber-700' :
                    selectedMetric === 'wasting' ? 'text-orange-700' :
                    'text-purple-700'
                  }`}>
                    📊 Key Insight:
                  </span>
                </p>
                <p className="text-sm text-gray-700">
                  {selectedMetric === 'stunting' && (
                    <>Peak stunting occurs in the <span className="font-bold text-red-600">24-36 months</span> age 
                    group (45.7%), highlighting the critical window for nutritional interventions during the first 
                    1000 days of life.</>
                  )}
                  {selectedMetric === 'wasting' && (
                    <>Highest wasting rates are observed in the <span className="font-bold text-orange-600">6-12 months</span> age 
                    group (21.4%), indicating acute malnutrition during the critical complementary feeding period.</>
                  )}
                  {selectedMetric === 'underweight' && (
                    <>Underweight prevalence peaks at <span className="font-bold text-purple-600">24-36 months</span> 
                    (38.2%), reflecting both chronic and acute malnutrition affecting overall growth and development.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* State-wise Comparison */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">State-wise Malnutrition Comparison</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={stateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" angle={-45} textAnchor="end" height={100} fontSize={12} />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="stunting" fill="#ef4444" name="Stunting" />
                <Bar dataKey="wasting" fill="#f59e0b" name="Wasting" />
                <Bar dataKey="underweight" fill="#8b5cf6" name="Underweight" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Age-wise Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Age-wise Malnutrition Prevalence</h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={ageWiseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" fontSize={12} />
                <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stunting" stroke="#ef4444" strokeWidth={3} name="Stunting" />
                <Line type="monotone" dataKey="wasting" stroke="#f59e0b" strokeWidth={3} name="Wasting" />
                <Line type="monotone" dataKey="underweight" stroke="#8b5cf6" strokeWidth={3} name="Underweight" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Factors Affecting Stunting Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <TrendingDown className="w-8 h-8 mr-3 text-red-500" />
            Factors Contributing to Stunting
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart of Factors */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Impact Assessment by Factor</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={stuntingFactors} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="factor" width={150} fontSize={11} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Bar dataKey="impact" radius={[0, 8, 8, 0]}>
                    {stuntingFactors.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={IMPACT_COLORS[index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Radar Chart */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Multi-dimensional Impact Analysis</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Impact" dataKey="value" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Factor Categories */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: 'Dietary', color: '#2563eb' },
              { name: 'Environmental', color: '#059669' },
              { name: 'Health', color: '#dc2626' },
              { name: 'Socioeconomic', color: '#7c3aed' }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border-l-4 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: category.color }}>
                <h4 className="font-bold text-gray-800 mb-3" style={{ color: category.color }}>{category.name} Factors</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  {stuntingFactors
                    .filter(f => f.category === category.name)
                    .map((f, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: category.color }}></span>
                        <span>{f.factor}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">🎯 Highest Burden States</h3>
              <p className="text-indigo-100">Meghalaya (46.5%), Bihar (42.9%), and Jharkhand (39.6%) show the highest stunting rates, requiring immediate intervention.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">👶 Critical Age Group</h3>
              <p className="text-indigo-100">Children aged 12-36 months show peak malnutrition rates, highlighting the importance of the first 1000 days.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🔑 Primary Drivers</h3>
              <p className="text-indigo-100">Poor nutrition (85%), maternal malnutrition (80%), and low birth weight (78%) are the strongest contributors to stunting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">✅ Success Stories</h3>
              <p className="text-indigo-100">Kerala (19.7%) and Punjab (25.7%) demonstrate that focused interventions can significantly reduce malnutrition.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">Data based on National Family Health Survey (NFHS) reports</p>
          <p className="text-xs mt-2">Dashboard created for awareness and policy planning</p>
        </div>
      </div>
    </div>
  );
};

export default MalnutritionDashboard;