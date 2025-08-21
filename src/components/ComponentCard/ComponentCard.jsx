import React from "react";
import { Card, Button, Space } from "antd";
import { CopyOutlined, EyeOutlined } from "@ant-design/icons";
import "./ComponentCard.css";

const ComponentCard = ({
	title,
	description,
	component: Component,
	code,
	onPreview,
	onCopy,
}) => {
	return (
		<Card
			title={title}
			className="component-card"
			extra={
				<Space>
					<Button
						icon={<EyeOutlined />}
						size="small"
						onClick={onPreview}
					>
						Preview
					</Button>
					<Button
						icon={<CopyOutlined />}
						size="small"
						onClick={() => onCopy(code)}
					>
						Copy Code
					</Button>
				</Space>
			}
		>
			<p className="component-description">{description}</p>
			<div className="component-preview">
				<Component />
			</div>
		</Card>
	);
};

export default ComponentCard;
