import { Suspense } from 'react';
import AppBar from 'components/appBar/AppBar';
import BlockInfo from 'components/blockInfo/BlockInfo';
import PortfolioBox from 'components/portfolioBox/PortfolioBox';
import LastInfo from 'components/lastInfo/LastInfo';
import Loader from 'components/loader/ Loader';
import { useMainInfoQuery } from 'redux/mainInfoAPI';

function App() {
    const { data: mainInfo } = useMainInfoQuery();

    return (
        <Suspense fallback={<Loader />}>
            {mainInfo && (
                <>
                    <AppBar mainInfo={mainInfo} />
                    <BlockInfo mainInfo={mainInfo} />
                    <PortfolioBox mainInfo={mainInfo} />
                </>
            )}
            <LastInfo />
        </Suspense>
    );
}

export default App;
