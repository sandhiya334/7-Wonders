// Data for the modal (makes it feel more dynamic)
const wonderDetails = {
    "Great Wall of China": "The Great Wall was built over centuries to protect against invasions. It is the longest man-made structure in the world!",
    "Petra": "Established possibly as early as 312 BC, Petra is famous for its rock-cut architecture and water conduit system.",
    "Colosseum": "The largest ancient amphitheatre ever built, it held between 50,000 and 80,000 spectators."
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('wonder-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close-modal');

    // Attach click events to all "Learn More" buttons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const wonderName = e.target.closest('.wonder-card').dataset.wonder;
            
            modalTitle.innerText = wonderName;
            modalDesc.innerText = wonderDetails[wonderName] || "More details coming soon!";
            modal.style.display = "block";
        });
    });

    // Close modal logic
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    };

    // Human-like scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0,0,0,0.8)";
            nav.style.padding = "1rem 5%";
        } else {
            nav.style.background = "transparent";
            nav.style.padding = "2rem 5%";
        }
    });
});