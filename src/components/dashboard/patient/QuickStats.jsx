import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const QuickStats = ({ stats }) => {
  const colorVariants = {
    border: {
      green: 'border-green-100',
      blue: 'border-blue-100',
      purple: 'border-purple-100',
      orange: 'border-orange-100',
    },
    bg: {
      green: 'bg-green-100',
      blue: 'bg-blue-100',
      purple: 'bg-purple-100',
      orange: 'bg-orange-100',
    },
    text: {
      green: 'text-green-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
    >
      {stats.map((stat) => (
        <Card key={stat.text} className={colorVariants.border[stat.color]}>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${colorVariants.bg[stat.color]}`}>
                <stat.icon className={`h-6 w-6 ${colorVariants.text[stat.color]}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.text}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

export default QuickStats;