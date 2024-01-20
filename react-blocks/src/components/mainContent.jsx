import Advertisment from './advertisement'

import SubContent from './subContent'
const MainContent = () => {
    return(
        <div className="mainContent">
            <div >
                <SubContent/>
                <SubContent/>
                <SubContent/>
            </div>
            <Advertisment/>
        </div>
    )
}

export default MainContent;