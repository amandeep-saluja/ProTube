import { useSearchParams } from 'react-router-dom';
const ResultsPage = () => {
    const [params] = useSearchParams();

    console.log(params.get('search_query'));

    return <div>Results</div>;
};

export default ResultsPage;
