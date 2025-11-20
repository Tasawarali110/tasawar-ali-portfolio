import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VisualizationProps {
  data: any;
}

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444'];

export function ProjectVisualization({ data }: VisualizationProps) {
  if (!data || !data.type) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-500">
        No visualization data available
      </div>
    );
  }

  switch (data.type) {
    case 'sentiment':
      return (
        <div>
          <h4 className="text-white text-center mb-4">Real-Time Sentiment Trends</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.sentiments}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="positive"
                stackId="1"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="neutral"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="negative"
                stackId="1"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );

    case 'prediction':
      return (
        <div>
          <h4 className="text-white text-center mb-4">Equipment Health Predictions</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.predictions}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="equipment" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="health" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="confidence" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
              <div className="text-green-400">Healthy</div>
              <div className="text-slate-400 text-xs">{'>'} 70%</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
              <div className="text-yellow-400">Warning</div>
              <div className="text-slate-400 text-xs">40-70%</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
              <div className="text-red-400">Critical</div>
              <div className="text-slate-400 text-xs">{'<'} 40%</div>
            </div>
          </div>
        </div>
      );

    case 'segmentation':
      return (
        <div>
          <h4 className="text-white text-center mb-4">Customer Segments Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.segments}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.segments.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {data.segments.map((segment: any, index: number) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: segment.color || COLORS[index % COLORS.length] }}
                  />
                  <span className="text-slate-300">{segment.name}</span>
                </div>
                <span className="text-blue-400">{segment.value}%</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'performance':
      return (
        <div>
          <h4 className="text-white text-center mb-4">Model Performance Metrics</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.metrics} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
              <YAxis type="category" dataKey="metric" stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill="#3b82f6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
            <div className="text-green-400">Exceptional Performance</div>
            <div className="text-slate-400 text-sm mt-1">
              All metrics exceed industry standards
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center h-64 text-slate-500">
          Unknown visualization type
        </div>
      );
  }
}
