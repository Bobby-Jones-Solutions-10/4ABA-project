'use client'
import { useEffect, useState } from 'react';
import iconLogin from '../../common/images/iconLogin.png'
import iconLoginBtn from '../../common/images/iconLoginBtn.png'
import imgLogin from '../../common/images/imgLogin.png'
import logo from '../../common/images/logo.png'
import bgLogin from '../../common/images/bgLogin.png'
import { Card } from './style';
import Image from 'next/image';


function Login() {

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (

        <div id='imgBgLogin'>
            <Container id='loginContainer'>
                <Row style={{ padding: '14em 0px 14em 0px' }}>
                    <Col md={5} className='centered'>
                        <Card>
                            <Image img-fluid='true' src={logo} alt="Logo" className='p-4' />
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="Email"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">Email</label>
                            </Form.Floating>
                            <Form.Floating>
                                <Form.Control
                                    id="Password"
                                    type="password"
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPasswordCustom">Senha</label>
                            </Form.Floating>
                            <Button className='mt-4 mb-3' disabled={isLoading} variant='success' onClick={!isLoading ? handleClick : null} style={{ padding: '5px 15%', fontWeight: 'bold', fontSize: 17 }}>
                                {isLoading ? 'Loading…' : 'Logar'}
                            </Button>
                            <Container>
                                <Row style={{ padding: '0', margin: '0', width: '100%' }}>
                                    <Col md={6} style={{ padding: '0', textAlign: 'left' }}>
                                        <a href="">Não tenho um cadastro</a>
                                    </Col>
                                    <Col md={6} style={{ padding: '0', textAlign: 'right' }}>
                                        <a href="">Esqueci minha senha</a>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}


export default Login;