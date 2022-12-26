import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const MenuNavigation = () => {
    const navigate=useNavigate()
    return (
        // <div>MenuNavigation</div>
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
            <Menu.Item key="mail" onClick={()=>{navigate("/")}} icon={<MailOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="two" onClick={()=>{navigate("about-us")}} icon={<AppstoreOutlined />}>
                    About
                </Menu.Item>
                <Menu.Item key="three" onClick={()=>{navigate("profile")}} icon={<AppstoreOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="four" onClick={()=>{navigate("contact-us")}} icon={<AppstoreOutlined />}>
                    Contact Us
                </Menu.Item>
                <Menu.Item key="five" onClick={()=>{navigate("social-media")}} icon={<AppstoreOutlined />}>
                    Social Media
                </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="Sub Menu" icon={<SettingOutlined />}>
                <Menu.Item key="two" onClick={()=>{navigate("about-us")}} icon={<AppstoreOutlined />}>
                    About
                </Menu.Item>
                <Menu.Item key="three" onClick={()=>{navigate("profile")}} icon={<AppstoreOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="four" onClick={()=>{navigate("contact-us")}} icon={<AppstoreOutlined />}>
                    Contact Us
                </Menu.Item>
                <Menu.Item key="five" onClick={()=>{navigate("social-media")}} icon={<AppstoreOutlined />}>
                    Social Media
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}

export default MenuNavigation