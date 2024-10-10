const profile = {
    name: "SESHADHRI SV",
    skills: {
        HTML: 85,
        CSS: 75,
        JavaScript: 80,
        React: 60,
        Java:75,
    }
};


const ctx = document.getElementById('skillsChart').getContext('2d');
let skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(profile.skills),
        datasets: [{
            label: 'Skill Level',
            data: Object.values(profile.skills),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

function updateChart(profile) {
    skillsChart.data.labels = Object.keys(profile.skills);
    skillsChart.data.datasets[0].data = Object.values(profile.skills);
    skillsChart.update();
}


function filterSkills(level) {
    let filteredSkills = {};
    if (level === 'high') {
        filteredSkills = Object.fromEntries(Object.entries(profile.skills).filter(([skill, value]) => value > 80));
    } else if (level === 'low') {
        filteredSkills = Object.fromEntries(Object.entries(profile.skills).filter(([skill, value]) => value <= 80));
    }
    updateChart({ skills: filteredSkills });
}


function resetSkills() {
    updateChart(profile);
}
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;

    
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        footer.classList.add('visible-footer');
        footer.classList.remove('hidden-footer');
    } else {
        footer.classList.add('hidden-footer');
        footer.classList.remove('visible-footer');
    }
});


