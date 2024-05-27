document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;
            let content = '';
            switch (buttonText) {
                case 'About US':
                    content = 'To bring technology and the digital community to life in different rural communities, the members of this campaign organize such projects that include seminars, fund-raising, and other necessary ways to further assist these areas. In order to achieve these goals, the following are some of what we do: (1) Survey and consult the community to fully identify its needs and challenges in terms of technology, (2) Collaborate with local governments, schools, businesses, and NGOs to gain support for resources and expertise, (3) Unique initiatives to meet the needs of each rural area, (4) Innovate solutions to reduce connectivity issues, and (5) Communicate with residents and local leaders to address concerns and gather feedback for campaign improvement.';
                    break;
                case 'About LOGO':
                    content = 'The logo of this campaign is expressed and made in a way that it represented the whole main goal of the campaign itself. Briefly describing, the three buildings represents equality, service, and loyalty. The circle that envlelopes the building represents trust and loyalty to these 3 buildings. The heartbeat on the other hand represents the ones that the campaign is going to be helping, the ones that give life to this project. And lastly the leaf, that symbolizes hope to keep a grasp on.';
                    break;
                case 'About CAMPAIGN':
                    content = 'EmpoweRural serves to empower rural communities with access to digital technology, education, and resources, thereby bridging the digital divide and fostering economic growth, innovation, and social inclusion in rural areas by: (1) Providing training programs for people in the said areas to learn how to understand and use the functionalities of technology, (2) Improving the internet infrastructure of the areas for better connection, (3) Partnering with local schools to integrate technology into the curricula for students to have access to the many resources on the internet, and learn through digital ways, (4) Creating platforms for digital community engagement and interactions, (5) Fund-raising for more support in the rural areas.'
;
                    break;
                default:
                    content = 'No content available.';
            }
            popupContent.innerHTML = content;
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});