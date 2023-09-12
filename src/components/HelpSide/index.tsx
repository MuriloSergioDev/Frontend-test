import { Accordion } from "semantic-ui-react";
import questionIcon from "../../assets/question.svg";
import './index.css';
import { useLogin } from "../../hooks/useLogin";

function HelpSide() {
    const { goToLogin } = useLogin();

    const btt = [
        {
            title: 'Lorem Ipsum is simply dummy text?',
            content: [
                'Semantic UI is a modern framework used in developing seamless designs',
                'for the website, Its gives the user a lightweight experience with its',
                'components. It uses the predefined CSS, JQuery language to incorporate',
                'in different framework',
            ],
            key: 1,
        },
        {
            title: 'Sed ut perspiciatis unde omnis iste?',
            content: [
                'Semantic UI is a modern framework used in developing seamless designs',
                'for the website, Its gives the user a lightweight experience with its',
                'components. It uses the predefined CSS, JQuery language to incorporate',
                'in different framework',
            ],
            key: 2,
        },
        {
            title: 'But because those who do not know how?',
            content: [
                'Semantic UI is a modern framework used in developing seamless designs',
                'for the website, Its gives the user a lightweight experience with its',
                'components. It uses the predefined CSS, JQuery language to incorporate',
                'in different framework',
            ],
            key: 3,
        },
    ]

    return (
        <>
            <div className='help-side-container'>
                <img src={questionIcon} alt="Question icon" className="help-icon" />
                <h3>Frequently asked questions</h3>
                <Accordion fluid styled defaultActiveIndex={0} panels={btt} />
                <button className="ui button btn-login fluid " type="button" onClick={goToLogin}>Back to login</button>
            </div>
        </>
    );
}

export default HelpSide;