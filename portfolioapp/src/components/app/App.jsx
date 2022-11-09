import { Suspense } from 'react';
import AppBar from 'components/appBar/AppBar';
import BlockInfo from 'components/blockInfo/BlockInfo';
import PortfolioBox from 'components/portfolioBox/PortfolioBox';
import LastInfo from 'components/lastInfo/LastInfo';
// import { FullHigth } from './App.styled';
import Loader from 'components/loader/ Loader';
import { useMainInfoQuery } from 'redux/mainInfoAPI';

function App() {
    const { data: mainInfo } = useMainInfoQuery();
    return (
        <Suspense fallback={<Loader />}>
            <AppBar mainInfo={mainInfo} />
            <BlockInfo mainInfo={mainInfo} />
            <PortfolioBox />
            <LastInfo />
        </Suspense>
    );
}

export default App;
