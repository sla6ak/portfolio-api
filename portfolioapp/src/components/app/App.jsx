import { Suspense } from 'react';
import AppBar from 'components/appBar/AppBar';
import BlockInfo from 'components/blockInfo/BlockInfo';
import PortfolioBox from 'components/portfolioBox/PortfolioBox';
import LastInfo from 'components/lastInfo/LastInfo';
// import { FullHigth } from './App.styled';
import Loader from 'components/loader/ Loader';

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <AppBar />
            <BlockInfo />
            <PortfolioBox />
            <LastInfo />
        </Suspense>
    );
}

export default App;
