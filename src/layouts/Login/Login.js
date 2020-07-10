import React from "react";
import { Layout } from 'antd';
import styles from './Login.less'
import LoginComponent from "../../components/login/loginComponent";
import loginLogo from '../../assets/login.svg'

const { Header, Footer, Sider, Content } = Layout;

const Login = (props) => {
    return (
        <div className={styles.container}>
            <Layout>
                <Header>{`Authorization Server`}</Header>
                <Layout>
                    <Sider><img src={loginLogo} alt={`login`} className={styles.image}/></Sider>
                    <Content>
                        <LoginComponent/>
                    </Content>
                </Layout>
                <Footer>{`Copyright © 2020 Aman Shukla`}</Footer>
            </Layout>
        </div>
    )
};

export default Login

