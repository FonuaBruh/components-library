export const buttonsData = [
	{
		id: 1,
		title: "Primary Button",
		description: "A simple primary button with hover effects",
		component: ({ width = 120, height = 40, color = "#1890ff" }) => (
			<button
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: color,
					color: "white",
					border: "none",
					borderRadius: "6px",
					cursor: "pointer",
					fontSize: "14px",
					fontWeight: "500",
					transition: "all 0.2s",
				}}
				onMouseOver={(e) => {
					e.target.style.transform = "translateY(-1px)";
					e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
				}}
				onMouseOut={(e) => {
					e.target.style.transform = "translateY(0)";
					e.target.style.boxShadow = "none";
				}}
			>
				Primary Button
			</button>
		),
		code: `const PrimaryButton = () => (
  <button
    style={{
      width: '120px',
      height: '40px',
      backgroundColor: '#1890ff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    }}
  >
    Primary Button
  </button>
);`,
	},
	{
		id: 2,
		title: "Outline Button",
		description: "Button with outline style and smooth transitions",
		component: ({ width = 120, height = 40, color = "#1890ff" }) => (
			<button
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: "transparent",
					color: color,
					border: `2px solid ${color}`,
					borderRadius: "6px",
					cursor: "pointer",
					fontSize: "14px",
					fontWeight: "500",
					transition: "all 0.2s",
				}}
				onMouseOver={(e) => {
					e.target.style.backgroundColor = color;
					e.target.style.color = "white";
				}}
				onMouseOut={(e) => {
					e.target.style.backgroundColor = "transparent";
					e.target.style.color = color;
				}}
			>
				Outline Button
			</button>
		),
		code: `const OutlineButton = () => (
  <button
    style={{
      width: '120px',
      height: '40px',
      backgroundColor: 'transparent',
      color: '#1890ff',
      border: '2px solid #1890ff',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500'
    }}
  >
    Outline Button
  </button>
);`,
	},
	{
		id: 3,
		title: "Disabled Button",
		description: "A disabled button with appropriate styling",
		component: ({ width = 120, height = 40 }) => (
			<button
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: "#f5f5f5",
					color: "#bfbfbf",
					border: "1px solid #d9d9d9",
					borderRadius: "6px",
					cursor: "not-allowed",
					fontSize: "14px",
					fontWeight: "500",
				}}
				disabled
			>
				Disabled Button
			</button>
		),
		code: `const DisabledButton = () => (
  <button
    style={{
      width: '120px',
      height: '40px',
      backgroundColor: '#f5f5f5',
      color: '#bfbfbf',
      border: '1px solid #d9d9d9',
      borderRadius: '6px',
      cursor: 'not-allowed',
      fontSize: '14px',
      fontWeight: '500'
    }}
    disabled
  >
    Disabled Button
  </button>
);`,
	},
];

export const cardsData = [
	{
		id: 1,
		title: "Simple Card",
		description: "A basic card with title and content",
		component: ({ width = 300, height = 200, color = "#f0f0f0" }) => (
			<div
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: color,
					border: "1px solid #d9d9d9",
					borderRadius: "8px",
					padding: "16px",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
				}}
			>
				<h3 style={{ margin: "0 0 12px 0", color: "#262626" }}>
					Card Title
				</h3>
				<p style={{ margin: 0, color: "#595959" }}>
					This is a simple card component with some sample content.
				</p>
			</div>
		),
		code: `const SimpleCard = () => (
  <div
    style={{
      width: '300px',
      height: '200px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #d9d9d9',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <h3 style={{ margin: '0 0 12px 0' }}>Card Title</h3>
    <p style={{ margin: 0 }}>
      This is a simple card component with some sample content.
    </p>
  </div>
);`,
	},
	{
		id: 2,
		title: "Card with Image",
		description: "Card featuring an image and content",
		component: ({ width = 300, height = 300 }) => (
			<div
				style={{
					width: `${width}px`,
					height: `${height}px`,
					backgroundColor: "white",
					border: "1px solid #d9d9d9",
					borderRadius: "8px",
					overflow: "hidden",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
				}}
			>
				<div
					style={{
						height: "150px",
						backgroundColor: "#1890ff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "white",
						fontSize: "16px",
						fontWeight: "500",
					}}
				>
					Image Placeholder
				</div>
				<div style={{ padding: "16px" }}>
					<h3 style={{ margin: "0 0 8px 0", color: "#262626" }}>
						Card Title
					</h3>
					<p
						style={{
							margin: 0,
							color: "#595959",
							fontSize: "14px",
						}}
					>
						This card includes an image placeholder and content
						below.
					</p>
				</div>
			</div>
		),
		code: `const CardWithImage = () => (
  <div
    style={{
      width: '300px',
      height: '300px',
      backgroundColor: 'white',
      border: '1px solid #d9d9d9',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <div
      style={{
        height: '150px',
        backgroundColor: '#1890ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px',
        fontWeight: '500'
      }}
    >
      Image Placeholder
    </div>
    <div style={{ padding: '16px' }}>
      <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
      <p style={{ margin: 0, color: '#595959', fontSize: '14px' }}>
        This card includes an image placeholder and content below.
      </p>
    </div>
  </div>
);`,
	},
];

export const listsData = [
	{
		id: 1,
		title: "Simple List",
		description: "A basic unordered list with hover effects",
		component: ({ width = 200, height = 150, color = "#1890ff" }) => (
			<ul
				style={{
					width: `${width}px`,
					height: `${height}px`,
					listStyle: "none",
					padding: 0,
					margin: 0,
				}}
			>
				{["Item 1", "Item 2", "Item 3", "Item 4"].map((item, index) => (
					<li
						key={index}
						style={{
							padding: "8px 12px",
							borderBottom: "1px solid #d9d9d9",
							cursor: "pointer",
							transition: "all 0.2s",
						}}
						onMouseOver={(e) => {
							e.target.style.backgroundColor = "#f5f5f5";
							e.target.style.color = color;
						}}
						onMouseOut={(e) => {
							e.target.style.backgroundColor = "transparent";
							e.target.style.color = "inherit";
						}}
					>
						{item}
					</li>
				))}
			</ul>
		),
		code: `const SimpleList = () => (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
      <li
        key={index}
        style={{
          padding: '8px 12px',
          borderBottom: '1px solid #d9d9d9',
          cursor: 'pointer'
        }}
      >
        {item}
      </li>
    ))}
  </ul>
);`,
	},
	{
		id: 2,
		title: "Numbered List",
		description: "Ordered list with numbers",
		component: ({ width = 200, height = 150 }) => (
			<ol
				style={{
					width: `${width}px`,
					height: `${height}px`,
					padding: "0 0 0 20px",
					margin: 0,
				}}
			>
				{["First item", "Second item", "Third item", "Fourth item"].map(
					(item, index) => (
						<li
							key={index}
							style={{
								padding: "6px 0",
								color: "#262626",
							}}
						>
							{item}
						</li>
					)
				)}
			</ol>
		),
		code: `const NumberedList = () => (
  <ol style={{ padding: '0 0 0 20px', margin: 0 }}>
    {['First item', 'Second item', 'Third item', 'Fourth item'].map((item, index) => (
      <li
        key={index}
        style={{
          padding: '6px 0',
          color: '#262626'
        }}
      >
        {item}
      </li>
    ))}
  </ol>
);`,
	},
];
