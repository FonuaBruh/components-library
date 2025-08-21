import React, { useState } from "react";
import { Row, Col, message } from "antd";
import ComponentCard from "../components/ComponentCard/ComponentCard";
import Preview from "../components/Preview/Preview";
import Controls from "../components/Controls/Controls";
import { buttonsData } from "../data/componentsData.jsx";

const Buttons = () => {
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewComponent, setPreviewComponent] = useState(null);
	const [previewTitle, setPreviewTitle] = useState("");
	const [componentProps, setComponentProps] = useState({
		width: 120,
		height: 40,
		color: "#1890ff",
	});

	const handlePreview = (component, title) => {
		setPreviewComponent(() => component);
		setPreviewTitle(title);
		setPreviewVisible(true);
	};

	const handleCopy = (code) => {
		navigator.clipboard.writeText(code);
		message.success("Code copied to clipboard!");
	};

	const handleClosePreview = () => {
		setPreviewVisible(false);
		setPreviewComponent(null);
	};

	const updateComponentProps = (newProps) => {
		setComponentProps((prev) => ({ ...prev, ...newProps }));
	};

	return (
		<div>
			<Controls
				{...componentProps}
				onWidthChange={(width) => updateComponentProps({ width })}
				onHeightChange={(height) => updateComponentProps({ height })}
				onColorChange={(color) =>
					updateComponentProps({ color: color.toHexString() })
				}
			/>

			<Row gutter={[24, 24]}>
				{buttonsData.map((item) => (
					<Col xs={24} md={12} lg={8} key={item.id}>
						<ComponentCard
							title={item.title}
							description={item.description}
							component={() => item.component(componentProps)}
							code={item.code}
							onPreview={() =>
								handlePreview(
									() => item.component(componentProps),
									item.title
								)
							}
							onCopy={handleCopy}
						/>
					</Col>
				))}
			</Row>

			<Preview
				visible={previewVisible}
				onClose={handleClosePreview}
				component={previewComponent}
				title={previewTitle}
			/>
		</div>
	);
};

export default Buttons;
