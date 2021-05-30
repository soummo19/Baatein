import { Button } from '@material-ui/core';
import Head from 'next/head';
import styled from 'styled-components';
import { auth , provider} from '../firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
                <title>Log-in</title>
            </Head>
            <LoginContainer>
                {/* <Logo
                    src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
                /> */}
                <h1>Welcome to Baatein!</h1>
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    );
}

export default Login



const Container = styled.div`
    display:grid;
    place-items: center;
    height:100vh;
    background-color: #9cb2f0;

`;

const LoginContainer = styled.div`
    padding:100px;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow : 0px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;