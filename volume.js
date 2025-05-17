document.addEventListener('DOMContentLoaded', function () { const storyButtons = document.querySelectorAll('.story-button');

storyButtons.forEach(button => {
    button.addEventListener('click', function () {
        const story = this.getAttribute('data-story');
        const container = document.getElementById('volume-container');
        container.innerHTML = '';

        if (story === 'Multiverse') {
            // Multiverse has Seasons
            const seasons = ['Season 1', 'Season 2'];
            seasons.forEach((season, index) => {
                const seasonButton = document.createElement('button');
                seasonButton.textContent = season;
                seasonButton.className = 'season-button';
                seasonButton.onclick = () => loadVolumes(`Multiverse_${index + 1}`);
                container.appendChild(seasonButton);
            });
        } else {
            // Other stories have Volumes directly
            const volumes = ['Volume 1', 'Volume 2', 'Volume 3'];
            volumes.forEach((volume, index) => {
                const volumeButton = document.createElement('button');
                volumeButton.textContent = volume;
                volumeButton.className = 'volume-button';
                volumeButton.onclick = () => openVolume(`${story}_Volume${index + 1}`);
                container.appendChild(volumeButton);
            });
        }
    });
});

});

function loadVolumes(season) { const container = document.getElementById('volume-container'); container.innerHTML = ''; const volumes = ['Volume 1', 'Volume 2', 'Volume 3']; volumes.forEach((volume, index) => { const volumeButton = document.createElement('button'); volumeButton.textContent = volume; volumeButton.className = 'volume-button'; volumeButton.onclick = () => openVolume(${season}_Volume${index + 1}); container.appendChild(volumeButton); }); }

function openVolume(volumeName) { alert(Opening ${volumeName}.html); // window.location.href = ${volumeName}.html; // Uncomment when the files are ready }

