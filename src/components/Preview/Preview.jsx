import React from "react";
import { Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./Preview.css";

const Preview = ({
	visible,
	onClose,
	component: Component,
	title,
}) => {
	return (
		<Modal
			title={title}
			open={visible}
			onCancel={onClose}
			footer={[
				<Button key="close" icon={<CloseOutlined />} onClick={onClose}>
					Close
				</Button>,
			]}
			width="80%"
			style={{ top: 20 }}
		>
			<div className="preview-content">
				<Component />
			</div>
		</Modal>
	);
};

export default Preview;
