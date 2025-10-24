import { Header } from '../components/Header';

export function NotFound(){
    return(
        <>
            <Header/>
            <div style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h1 style={{ color: 'red', fontSize: '2rem' }}>
                Page Not Found! Go AWAY!
                </h1>
            </div>
        </>
    );
}