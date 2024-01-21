
import '../stylesheets/ProjectList.css';
const ProjectList = () => {

    const urlPlaceholder = 'https://picsum.photos/200';

    return(

        <main>

            <ul className="project-list">
                {/* projectPreview image links */}
                {/* create github repo => fetchAPI */}
                <li>
                    <a href="#">
                        <img src={urlPlaceholder} alt="Project preview image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={urlPlaceholder} alt="Project preview image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={urlPlaceholder} alt="Project preview image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={urlPlaceholder} alt="Project preview image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={urlPlaceholder} alt="Project preview image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={urlPlaceholder} alt="Project preview image"/>
                    </a>
                </li>
            </ul>

        </main>
        
    )
};
export default ProjectList;