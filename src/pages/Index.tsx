import React from 'react';
import Progress from '../components/ui/progress';

const Index = () => {
    const milestones = [/* Your milestones data */];
    const total = milestones.length;

    // Compute today's date at the start of the day
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completedMilestones = milestones.filter(milestone => {
        const cutoffDate = new Date(milestone.cutoffDate); // Assuming each milestone has a cutoffDate property
        return cutoffDate <= today;
    }).length;

    const progressPercentage = (completedMilestones / total) * 100;

    // Assuming the last milestone has the deadline date
    const lastMilestoneDeadline = milestones[total - 1].cutoffDate; // Should be in the format YYYY-MM-DD

    return (
        <div>
            <h1>Zeitplan/Meilensteine</h1>
            <Progress percentage={progressPercentage} />
            <p>Fortschritt: {progressPercentage.toFixed(2)}%</p>
            <h2>Abgabe: {new Date(lastMilestoneDeadline).toLocaleDateString('de-DE')}</h2>
            {/* Render milestone cards here */}
        </div>
    );
};

export default Index;