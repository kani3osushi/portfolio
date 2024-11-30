// src/components/TimelineEvent.tsx
import React from "react";

interface TimelineEventProps {
  event: {
    skill: { name: string; description: string; rarity: string };
    character: { name: string };
    acquired_at: string;
  };
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event }) => {
  return (
    <div className="flex items-start space-x-4 border-b border-gray-200 py-4">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          🎉
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium">{event.character.name}</h3>
        <p className="text-sm text-gray-600">{event.skill.name}</p>
        <p className="text-xs text-gray-400">{event.acquired_at}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
