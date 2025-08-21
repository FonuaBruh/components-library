import React from "react";
import {
	Card,
	Slider,
	ColorPicker,
	InputNumber,
	Space,
	Typography,
} from "antd";
import "./Controls.css";

const { Title } = Typography;

const Controls = ({
	width,
	height,
	color,
	onWidthChange,
	onHeightChange,
	onColorChange,
}) => {
	return (
		<Card title="Component Controls" className="controls-card">
			<Space direction="vertical" size="middle" style={{ width: "100%" }}>
				<div>
					<Title level={5}>Width: {width}px</Title>
					<Slider
						min={50}
						max={500}
						value={width}
						onChange={onWidthChange}
					/>
					<InputNumber
						min={50}
						max={500}
						value={width}
						onChange={onWidthChange}
						style={{ width: "100%", marginTop: 8 }}
					/>
				</div>

				<div>
					<Title level={5}>Height: {height}px</Title>
					<Slider
						min={30}
						max={300}
						value={height}
						onChange={onHeightChange}
					/>
					<InputNumber
						min={30}
						max={300}
						value={height}
						onChange={onHeightChange}
						style={{ width: "100%", marginTop: 8 }}
					/>
				</div>

				<div>
					<Title level={5}>Color</Title>
					<ColorPicker
						value={color}
						onChange={onColorChange}
						showText
						style={{ width: "100%" }}
					/>
				</div>
			</Space>
		</Card>
	);
};

export default Controls;
