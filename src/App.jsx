import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
	DashboardOutlined,
	AppstoreOutlined,
	UnorderedListOutlined,
} from "@ant-design/icons";
import Buttons from "./pages/Buttons";
import Controls from "./pages/Controls";
import Lists from "./pages/Lists";
import "./App.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
	const [selectedPage, setSelectedPage] = useState("buttons");

	const menuItems = [
		{
			key: "buttons",
			icon: <DashboardOutlined />,
			label: "Buttons",
		},
		{
			key: "cards",
			icon: <AppstoreOutlined />,
			label: "Cards",
		},
		{
			key: "lists",
			icon: <UnorderedListOutlined />,
			label: "Lists",
		},
	];

	const renderPage = () => {
		switch (selectedPage) {
			case "buttons":
				return <Buttons />;
			case "cards":
				return <Controls />;
			case "lists":
				return <Lists />;
			default:
				return <Buttons />;
		}
	};

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider theme="dark">
				<div className="logo">
					<Title
						level={4}
						style={{
							color: "white",
							textAlign: "center",
							padding: "16px",
						}}
					>
						Components Library
					</Title>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[selectedPage]}
					items={menuItems}
					onClick={({ key }) => setSelectedPage(key)}
				/>
			</Sider>
			<Layout>
				<Header style={{ background: "#fff", padding: "0 24px" }}>
					<Title level={3} style={{ margin: 0 }}>
						{selectedPage.charAt(0).toUpperCase() +
							selectedPage.slice(1)}
					</Title>
				</Header>
				<Content
					style={{
						margin: "24px",
						padding: "24px",
						background: "#fff",
					}}
				>
					{renderPage()}
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
