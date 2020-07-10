import React from "react";
import { Layout } from 'antd';
import styles from './Registration.less'
import RegistrationComponent from "../../components/registration/registrationComponent";
import registrationLogo from '../../assets/registration.svg'

const { Header, Footer, Sider, Content } = Layout;

const Registration = (props) => {
    return (
        <div className={styles.container}>
            <Layout>
                <Header>{`Authorization Server`}</Header>
                <Layout>
                    <Sider><img src={registrationLogo} alt={`login`} className={styles.image}/></Sider>
                    <Content>
                        <RegistrationComponent/>
                    </Content>
                </Layout>
                <Footer>{`Copyright © 2020 Aman Shukla`}</Footer>
            </Layout>
        </div>
    )
};

export default Registration

