// =============================================================
//  D-AEROSPACE — central content model
//  Edit copy, specs, and contact details here in one place.
//  NOTE: values marked PLACEHOLDER should be confirmed by the client.
// =============================================================

export const company = {
	name: 'D Aerospace',
	tagline: 'Soaring Into Freedom To Go Higher',
	// PLACEHOLDER contact details — confirm with client
	phone: '+359 88 237 3878',
	email: 'info@d-aerospace.com',
	address: 'Sofia, Bulgaria',
	social: {
		instagram: 'https://www.instagram.com/daerospaceofficial/',
		youtube: 'https://www.youtube.com/@DAerospace',
		linkedin: 'https://www.linkedin.com/company/d-aerospace/',
		facebook: 'https://www.facebook.com/share/18sP2dbT8c/'
	}
};

export const nav = [
	{ label: 'Sectors', href: '/sectors', dropdown: true },
	{ label: 'Products', href: '/products' },
	{ label: 'Services', href: '/services' },
	{ label: 'Resource Library', href: '/resources' },
	{ label: 'About', href: '/about' }
];

// ---------------------------------------------------------------
//  PRODUCTS
// ---------------------------------------------------------------
export const products = [
	{
		slug: 'salvatore',
		drawing: "/img/drawings-salvatore.png",
		name: 'Salvatore',
		accent: '#ea5e1e',
		image: '/img/salvatore.png',
		tagline:
			'A reliable and compact drone that gives you the power to go further and reach higher without worrying about unpredictable weather conditions.',
		summary:
			'A robust, water- and dust-protected hexacopter engineered for demanding missions. Standard Cube Orange flight controller, video feed from up to two cameras, quick-release battery tray, portable ground control station and an optional carrier-box drop mechanism — NDAA-compliant when configured with Herelink and Cube Blue.',
		specs: [
			{ label: 'Max Flight Time', value: '40', unit: 'min' },
			{ label: 'Operating Range', value: '20', unit: 'km' },
			{ label: 'Max Payload', value: '10', unit: 'kg' },
			{ label: 'Flight Controller', value: 'Cube', unit: 'Orange' }
		],
		available: true
	},
	{
		slug: 'azriel',
		drawing: "/img/drawings-azriel.png",
		name: 'Azriel',
		accent: '#3aa0ff',
		image: '/img/azriel.png',
		tagline:
			'A one-of-a-kind multi-rotor platform allowing more advanced and diverse operational capabilities.',
		summary:
			'A hexacopter heavy-lift platform designed to IP54 standards, built to mount and power heavier payloads without compromising flight time. Payload mounting rails, easy-to-remove landing gear, auxiliary voltages and a Cube Orange flight controller — NDAA-compliant when configured with Herelink and Cube Blue.',
		specs: [
			{ label: 'Max Flight Time', value: '60', unit: 'min' },
			{ label: 'Operating Range', value: '20', unit: 'km' },
			{ label: 'Max Payload', value: '18', unit: 'kg' },
			{ label: 'All-Up Weight', value: '25', unit: 'kg' }
		],
		available: true
	},
	{
		slug: 'lifter',
		drawing: "/img/drawings-lifter.png",
		name: 'Lifter',
		accent: '#f5c451',
		image: '/img/lifter.png',
		tagline: 'Heavy-lift capability, engineered to carry more and hold steady where it matters.',
		summary:
			'Our heavy-lift workhorse — a rugged frame purpose-built for maximum payload, stable hover and the toughest operating conditions.',
		specs: [
			{ label: 'Max Flight Time', value: '35', unit: 'min' },
			{ label: 'Max Payload', value: '25', unit: 'kg' },
			{ label: 'Water Resistant', value: 'IP', unit: '54' },
			{ label: 'Operating Range', value: '15', unit: 'km' }
		],
		available: false
	},
	{
		// NOTE: capability specs only — send real figures (endurance, range, payload,
		// cruise speed) and they can be swapped straight into `specs` below.
		slug: 'vtol',
		name: 'VTOL',
		accent: '#e0362c',
		image: '/img/products/vtol.jpg',
		scene: true, // full-bleed render rather than a cut-out
		tagline:
			'Vertical take-off with fixed-wing endurance — the range of a plane and the landing footprint of a multirotor.',
		summary:
			'Our D24 VTOL platform takes off and lands vertically, then transitions to efficient fixed-wing cruise. No runway, no launcher — just far more ground covered per flight, ideal for corridor mapping, long-range survey and patrol.',
		specs: [
			{ label: 'Configuration', value: 'VTOL', unit: 'hybrid' },
			{ label: 'Take-off & Landing', value: 'Vertical', unit: '' },
			{ label: 'Cruise', value: 'Fixed', unit: 'wing' },
			{ label: 'Control', value: 'IRIS', unit: 'C2' }
		],
		available: false
	},
	{
		// NOTE: capability specs only — send real figures (dock cycle time, IP rating,
		// footprint, charge time) to replace these.
		slug: 'drone-in-a-box',
		name: 'Drone in a Box',
		accent: '#e0362c',
		image: '/img/products/drone-in-a-box.png',
		tagline:
			'A self-contained docking station — the aircraft launches, flies its mission and returns to charge, with nobody on site.',
		summary:
			'The D24 drone-in-a-box turns a site into a permanently monitored one. The weather-sealed dock opens on command or on schedule, releases the aircraft, and recharges it on return — so inspection and security patrols run autonomously, day after day, directed entirely from IRIS C2.',
		specs: [
			{ label: 'Operation', value: 'Fully', unit: 'autonomous' },
			{ label: 'Housing', value: 'Weather', unit: 'sealed' },
			{ label: 'Charging', value: 'Auto', unit: 'dock' },
			{ label: 'Control', value: 'IRIS', unit: 'C2' }
		],
		available: false
	}
];

// ---------------------------------------------------------------
//  SECTORS
// ---------------------------------------------------------------
export const sectors = [
	{
		slug: 'surveillance',
		name: 'Surveillance',
		tile: '/img/sectors/surveillance-tile.jpg',
		hero: '/img/sectors/surveillance-hero.jpg',
		eyebrow: 'Eyes on every asset',
		blurb: 'End-to-end aerial monitoring for critical assets and infrastructure.',
		intro:
			'From critical infrastructure to sprawling transport networks, aerial surveillance turns hard-to-reach assets into clear, actionable data. Here’s how our UAVs keep watch:',
		benefitsTitle: 'Benefits of aerial surveillance',
		benefits: [
			{ label: 'Continuous Asset Monitoring', body: 'High-resolution mapping of solar farms, power lines, roads, railways and pipelines — captured on a schedule, without shutting anything down.' },
			{ label: 'Thermal & Anomaly Detection', body: 'Thermal imaging surfaces hotspots, faults and intrusions early, before they become failures or incidents.' },
			{ label: 'Faster Insurance & Inspection Data', body: 'General insurance and inspection surveys are completed in hours, not days, with a defensible visual record.' },
			{ label: 'Plant & Pipeline Inspection', body: 'Thermal power, manufacturing and oil & gas facilities are inspected safely, keeping people away from hazardous areas.' }
		],
		closing: 'The result is a safer, faster and more affordable way to keep eyes on the assets that matter most.',
		points: [
			'Solar power plant mapping survey',
			'Power transmission & distribution mapping',
			'Roads and highways mapping survey',
			'Railroad and metro mapping survey',
			'General insurance data services',
			'Thermal power inspection',
			'Oil & gas pipeline inspection',
			'Mining site inspection',
			'Manufacturing plant inspection'
		]
	},
	{
		slug: 'agriculture',
		tile: "/img/sectors/agriculture-tile.jpg",
		hero: "/img/sectors/agriculture-hero.jpg",
		name: 'Agriculture',
		eyebrow: 'Fields into data',
		blurb: 'Precision agriculture insights that turn fields into data.',
		intro:
			'Precision agriculture turns every field into data. Our UAVs help growers see more, waste less and plan with confidence. Here’s how:',
		benefitsTitle: 'Benefits for modern farming',
		benefits: [
			{ label: 'Yield Prediction & Crop Monitoring', body: 'Multispectral imaging reveals plant health and stress long before it’s visible from the ground, guiding smarter decisions.' },
			{ label: 'Input & Water Management', body: 'Target fertiliser, water and treatment exactly where they’re needed, cutting cost and environmental impact.' },
			{ label: 'Damage Assessment & Research', body: 'Rapidly quantify storm, pest or disease damage and support ongoing agronomic research with repeatable surveys.' }
		],
		closing: 'From plant counting to full-season research, our platforms give agriculture the clarity to grow more with less.',
		points: [
			'Yield prediction',
			'Crop monitoring',
			'Input management',
			'Water management',
			'Plant counting',
			'Damage assessment',
			'Research'
		]
	},
	{
		slug: 'utilities-power',
		tile: "/img/sectors/utilities-power-tile.jpg",
		hero: "/img/sectors/utilities-power-hero.jpg",
		name: 'Utilities & Power',
		eyebrow: 'Keeping the grid up',
		blurb: 'Keep the grid running with fast, safe aerial inspection.',
		intro:
			'Keeping the grid running means inspecting it constantly — safely and without outages. Here’s how UAVs power utility operations:',
		benefitsTitle: 'Benefits for utilities & power',
		benefits: [
			{ label: 'Lidar Corridor Mapping', body: 'Precise Lidar mapping of power-line corridors captures clearances, vegetation encroachment and structural detail in a single pass.' },
			{ label: 'Visual & Anomaly Detection', body: 'High-resolution imaging spots damaged conductors, insulators and hardware before they cause an outage.' },
			{ label: 'Thermal / IR Fault Detection', body: 'Thermal inspection reveals overheating joints and components early, enabling planned maintenance instead of emergency repair.' }
		],
		closing: 'Utilities gain a faster, safer and more complete picture of the network — without ever taking it offline.',
		points: [
			'Lidar mapping of power lines',
			'Power line corridor mapping',
			'Visual inspection and anomaly detection',
			'Thermal / IR inspection and fault detection'
		]
	},
	{
		slug: 'infrastructure',
		tile: "/img/sectors/infrastructure-tile.jpg",
		hero: "/img/sectors/infrastructure-hero.jpg",
		name: 'Infrastructure',
		eyebrow: 'Build with clarity',
		blurb: 'Safer, faster, cheaper geospatial data across the build lifecycle.',
		intro:
			'Drones have made it safer, faster and less expensive to collect geospatial data across the build lifecycle. Here’s how they support infrastructure:',
		benefitsTitle: 'Benefits for infrastructure & construction',
		benefits: [
			{ label: 'Construction Progress Tracking', body: 'Regular aerial captures document progress against plan, keeping stakeholders aligned and projects on schedule.' },
			{ label: 'Volumetric & Stockpile Analysis', body: 'Accurate volume measurement of stockpiles and earthworks supports weekly material inventories and billing.' },
			{ label: 'As-Built vs As-Planned Surveys', body: 'Overlay reality against design to catch deviations early, before they become costly rework.' }
		],
		closing: 'From the pre-construction phase onward, managers work smarter with greater productivity and reliability.',
		points: [
			'Construction progress tracking',
			'Weekly material inventories',
			'Volumetric and stockpile analysis',
			'As-built vs. as-planned surveys'
		]
	},
	{
		slug: 'defence',
		tile: "/img/sectors/defence-tile.jpg",
		hero: "/img/sectors/defence-hero.jpg",
		name: 'Defence',
		eyebrow: 'Utilizing UAVs in national defense',
		blurb: 'Mission-ready aerial intelligence for tactical operations.',
		intro:
			'Unmanned Aerial Vehicles (UAVs) play a crucial role in enhancing national defense strategies across various fronts. From tactical mapping to reconnaissance, UAVs provide valuable intelligence and operational advantages. Here’s how UAVs are employed in national defense:',
		benefitsTitle: 'Benefits of sUAS for Military Operations',
		benefits: [
			{ label: 'Enhanced Situational Awareness', body: 'UAVs provide real-time, high-resolution aerial intelligence, empowering ground forces with detailed insights for responsive tactical maneuvers and mission planning.' },
			{ label: 'Improved Force Protection', body: 'Integrating unclassified aerial maps with situational awareness tools enhances communication and coordination among military units, ensuring effective deployment and protection.' },
			{ label: 'Secure Navigational Routes', body: 'Tactical mapping enables commanders to pre-plan safe transport routes for troops, ensuring swift and secure mobility in dynamic operational environments.' },
			{ label: 'Efficient Procurement', body: 'UAVs listed on the Blue UAVs list streamline procurement processes, eliminating the need for DoD exceptions, ensuring compliance with cybersecurity standards, and expediting operational readiness.' }
		],
		closing: 'By leveraging UAV technology and sophisticated software solutions, national defense agencies can bolster their capabilities, enhance operational efficiency, and ensure readiness to address evolving threats effectively.',
		points: [
			'Tactical mapping',
			'Intelligence gathering',
			'Reconnaissance',
			'Area obstacles analysis',
			'Mobility corridor mapping',
			'Road network assessment'
		]
	},
	{
		slug: 'research-education',
		tile: "/img/sectors/research-education-tile.jpg",
		hero: "/img/sectors/research-education-hero.jpg",
		name: 'Research & Education',
		eyebrow: 'Data for discovery',
		blurb: 'A flexible platform for science, survey and discovery.',
		intro:
			'A flexible, sensor-agnostic platform makes UAVs a powerful tool for science, survey and discovery. Here’s how researchers put them to work:',
		benefitsTitle: 'Benefits for research & education',
		benefits: [
			{ label: 'Environmental & Ecological Study', body: 'Monitor ecosystems, wildlife and coastlines with repeatable, non-invasive aerial surveys.' },
			{ label: 'Geological & Archaeological Documentation', body: 'Capture terrain, sites and structures in high fidelity for mapping, modelling and preservation.' },
			{ label: 'Remote Sensing & GIS', body: 'Feed rich multispectral and photogrammetric data straight into GIS and atmospheric research workflows.' }
		],
		closing: 'For institutions and field teams alike, our drones turn ambitious research questions into measurable data.',
		points: [
			'Environmental science and ecology studies',
			'Wildlife monitoring and conservation',
			'Geographical and geological surveys',
			'Marine and coastal research',
			'Architectural and archaeological documentation',
			'Meteorological and atmospheric studies',
			'Remote sensing and GIS applications'
		]
	},
	{
		slug: 'oil-gas',
		tile: "/img/sectors/oil-gas-tile.jpg",
		hero: "/img/sectors/oil-gas-hero.jpg",
		name: 'Oil & Gas',
		eyebrow: 'Inspect without downtime',
		blurb: 'Inspect pipelines and facilities without shutting down operations.',
		intro:
			'Inspect pipelines and facilities without shutting down operations. Here’s how UAVs support the energy sector:',
		benefitsTitle: 'Benefits for oil & gas',
		benefits: [
			{ label: 'Pipeline Inspection', body: 'Survey long pipeline corridors quickly, flagging leaks, corrosion and encroachment with visual and thermal imaging.' },
			{ label: 'Visual & Anomaly Detection', body: 'Identify structural and equipment issues across facilities safely, keeping personnel out of hazardous areas.' },
			{ label: 'Lidar Mapping', body: 'Detailed Lidar mapping of pipelines and sites supports planning, compliance and insurance data services.' }
		],
		closing: 'Operators gain continuous, defensible inspection data while keeping production running and people safe.',
		points: [
			'General insurance data services',
			'Visual inspection and anomaly detection',
			'Thermal / IR inspection and fault detection',
			'Oil & gas pipeline inspection',
			'Lidar mapping of oil & gas pipelines'
		]
	},
	{
		slug: 'public-safety',
		tile: "/img/sectors/public-safety-tile.jpg",
		hero: "/img/sectors/public-safety-hero.jpg",
		name: 'Public Safety',
		eyebrow: 'When seconds count',
		blurb: 'Rapid eyes in the sky when every second counts.',
		intro:
			'When every second counts, rapid eyes in the sky change outcomes. Here’s how UAVs serve public safety teams:',
		benefitsTitle: 'Benefits for public safety',
		benefits: [
			{ label: 'Search & Rescue', body: 'Thermal imaging locates people fast in darkness, dense terrain or disaster zones — and loudspeakers keep teams in contact.' },
			{ label: 'Disaster Response & Firefighting', body: 'Live aerial views guide crews, map fire and flood fronts, and support land-management decisions in real time.' },
			{ label: 'Security & Reconstruction', body: 'Support border patrol, accident and crime-scene reconstruction and infrastructure assessment with precise aerial evidence.' }
		],
		closing: 'From first response to investigation, our platforms give public-safety teams the awareness to act decisively.',
		points: [
			'Search and rescue missions',
			'Tracking and monitoring',
			'Package delivery',
			'Firefighting and land management',
			'Disaster response',
			'Border security and patrol',
			'Utility and infrastructure assessments',
			'Accident and crime scene reconstruction'
		]
	},
	{
		slug: 'mining-aggregates',
		tile: "/img/sectors/mining-aggregates-tile.jpg",
		hero: "/img/sectors/mining-aggregates-hero.jpg",
		name: 'Mining & Aggregates',
		eyebrow: 'Survey from above',
		blurb: 'Survey sites and stockpiles safely from above.',
		intro:
			'Survey sites and stockpiles safely from above, without putting people in harm’s way. Here’s how UAVs support mining:',
		benefitsTitle: 'Benefits for mining & aggregates',
		benefits: [
			{ label: 'Site & Plant Inspection', body: 'Inspect pit walls, haul roads, tailings dams and processing plants regularly without exposing personnel to risk.' },
			{ label: 'Volumetric Stockpile Measurement', body: 'Measure stockpile volumes accurately and repeatably for reconciliation and reporting.' },
			{ label: 'Safety & Compliance Monitoring', body: 'Document site conditions over time to support safety, planning and regulatory compliance.' }
		],
		closing: 'Mining operations gain accurate, up-to-date site intelligence while keeping their teams out of hazardous areas.',
		points: [
			'Mining site inspection',
			'Manufacturing plant inspection',
			'Pit walls, haul roads and tailings dams',
			'Volumetric stockpile measurement'
		]
	}
];

export const getSector = (slug) => sectors.find((s) => s.slug === slug);

// ---------------------------------------------------------------
//  SERVICES (process)
// ---------------------------------------------------------------
// Brand-voice service cards (alternating orange / blue) — matches the Figma frames.
export const serviceCards = [
	{
		n: '01',
		title: 'We Make Things Personal.',
		color: 'orange',
		image: '/img/salvatore.png',
		cta: { label: 'Ask us, we’ll build it', href: '/contact' },
		body: 'At D Aerospace, we build drones around you. With easy-mount systems and the power to run serious add-ons, a single platform can carry the payloads your work demands — from delivery and logistics winches to thermal cameras and specialised sensors. A great example is how we equip Search & Rescue and first-response teams: thermal cameras for detection in darkness, switchable video feeds for tracking, and loudspeakers for ground communication. Whatever the mission, we make it personal.'
	},
	{
		n: '02',
		title: 'What We Use.',
		color: 'blue',
		image: '/img/azriel.png',
		body: 'We use Finite Element Analysis (FEA) to predict how a payload and airframe react to real-world forces — vibration, heat, fluid flow and more. Before a single part is cut, the analysis shows us whether a design will break, wear out, or perform exactly as intended. It’s how we make sure every drone earns its place in the air.'
	},
	{
		n: '03',
		title: 'Prepare For Takeoff.',
		color: 'blue',
		image: '/img/drone-alt.png',
		body: 'We take you through every step. You’ll start with a thorough test flight, and our team will walk you through the particularities of your drone — because, after all, it’s personal. By the time you’re airborne on your own, you’ll know exactly how your aircraft moves, behaves and responds.'
	},
	{
		n: '04',
		title: 'We Serve All Sectors.',
		color: 'orange',
		image: '/img/lifter.png',
		cta: { label: 'Let’s work together', href: '/sectors' },
		body: 'Because our personalisation options are so flexible, we can cater to almost any industry: mapping, surveillance, agriculture, photography & filming, inspection, energy, construction, transportation and disaster relief. Whatever sector you’re in, there’s a D Aerospace configuration built for it.'
	}
];

// Service process steps — each has its own detail page with "How we do it" cards.
export const serviceSteps = [
	{
		slug: 'concept-development',
		icon: "/img/services/step-01.png",
		n: '01',
		title: 'Concept Development',
		theme: 'cyan',
		summary: 'Where every project starts — needs, market and configuration.',
		intro: [
			'Concept development forms the cornerstone of the entire project. At this stage, we identify the needs of the target application or market, examine any competing solutions or products, define the characteristics and configuration of the drone, conduct an economic analysis, and create an implementation schedule.',
			'Customers or partners are encouraged to join the team and actively participate in the concept development process.'
		],
		cards: [
			{ title: 'Identification', body: 'Through task or problem analysis and interviews with potential customers and focus groups, real needs are identified. We develop the information on which the requirements — and the characteristics of the drone — will be based.' },
			{ title: 'Target characteristics', body: 'Based on identified needs, our team sets target characteristics for a promising new product. Over the next stages these are updated to account for technical, production, competitive and economic realities.' },
			{ title: 'Select an option', body: 'We weigh the possible configurations against the identified requirements and select the option that best balances capability, cost and time to deliver.' },
			{ title: 'Economic analysis', body: 'Cost, selling price, implementation schedule and business model are assessed against market size and share expectations. Design and production milestones are planned in detail, including the required resources.' }
		]
	},
	{
		slug: 'system-design',
		icon: "/img/services/step-02.png",
		n: '02',
		title: 'System Design',
		theme: 'orange',
		summary: 'Fixing the configuration and running the core calculations.',
		intro: [
			'During system design, the specific configuration of the drone is determined and the calculations of the main systems are performed. We assess the feasibility of in-house production versus external procurement of components, including an assessment of suppliers.',
			'From a marketing point of view, options for additions or the creation of an entire product line are considered.'
		],
		cards: [
			{ title: 'Configuration', body: 'The airframe, propulsion, power and payload architecture are fixed, turning the chosen concept into a concrete system.' },
			{ title: 'Core calculations', body: 'Lift, endurance, structural loads and power budgets are calculated so the platform is proven on paper before anything is built.' },
			{ title: 'Make or buy', body: 'For each component we decide between in-house production and external procurement, assessing suppliers on quality, cost and lead time.' },
			{ title: 'Product line', body: 'We consider additions and variants that could grow the design into an entire product line.' }
		]
	},
	{
		slug: 'prototypes-testing',
		icon: "/img/services/step-03.png",
		n: '03',
		title: 'Prototypes & Testing',
		theme: 'lime',
		summary: 'Proving performance and behaviour in the real world.',
		intro: [
			'For the testing phase, several prototypes are usually made. The purpose of prototype testing is to verify the drone’s performance and behaviour against specifications, and to identify areas for improvement based on first real-world use.'
		],
		cards: [
			{ title: 'Build prototypes', body: 'Several prototypes are manufactured so different configurations and refinements can be evaluated in parallel.' },
			{ title: 'Verify performance', body: 'Each prototype is flown and measured against specification — endurance, payload, stability and control response.' },
			{ title: 'Find weak points', body: 'Real-world use exposes stresses that analysis alone can miss, revealing exactly where the design needs to improve.' },
			{ title: 'Iterate', body: 'Findings feed straight back into the design so the next prototype is measurably better than the last.' }
		]
	},
	{
		slug: 'detailed-design',
		icon: "/img/services/step-04.png",
		n: '04',
		title: 'Detailed Design',
		theme: 'cyan',
		summary: 'Documenting every part so it can be manufactured.',
		intro: [
			'During detailed design, we work on each component of the drone to such depth that it can be fully manufactured. Datasheets, specifications and all dimensions are fully defined and documented. The detailed design data then becomes the source of information for the production of prototypes.'
		],
		cards: [
			{ title: 'Component depth', body: 'Every part is designed to full manufacturing depth — nothing is left ambiguous for production.' },
			{ title: 'Documentation', body: 'Datasheets, specifications and all dimensions are fully defined and recorded.' },
			{ title: 'Single source of truth', body: 'The detailed design data becomes the authoritative source of information for producing prototypes and, later, series parts.' }
		]
	},
	{
		slug: 'commissioning',
		icon: "/img/services/step-05.png",
		n: '05',
		title: 'Commissioning Of Production',
		theme: 'orange',
		summary: 'Fine-tuning production and training the team.',
		intro: [
			'Production processes and production equipment are fine-tuned during commissioning. Specific technological operations are developed, and production personnel are trained during the production of the first drone samples.'
		],
		cards: [
			{ title: 'Process tuning', body: 'Production processes and equipment are fine-tuned so output is consistent and repeatable.' },
			{ title: 'Technological operations', body: 'Specific technological operations are developed for each stage of assembly.' },
			{ title: 'Team training', body: 'Production personnel are trained hands-on during the manufacture of the first drone samples.' }
		]
	}
];

export const getServiceStep = (slug) => serviceSteps.find((s) => s.slug === slug);

// ---------------------------------------------------------------
//  FAQs
// ---------------------------------------------------------------
export const productFaqs = [
	{
		q: 'Is there a maintenance plan or technical support available for Salvatore?',
		a: 'Yes. Every Salvatore ships with a support package and access to our knowledge centre. We offer scheduled maintenance plans and direct technical support so your fleet keeps flying.'
	},
	{
		q: 'What is Salvatore?',
		a: 'Salvatore is our reliable, compact industrial hexacopter — built to fly further and higher in unpredictable weather, and configurable for the sector you operate in.'
	},
	{
		q: 'What is Azriel?',
		a: 'Azriel is a one-of-a-kind multi-rotor platform offering more advanced and diverse operational capabilities, designed to mount and power heavier payloads without compromising flight time.'
	},
	{
		q: 'What is the difference between Azriel and Salvatore?',
		a: 'Salvatore is the compact, versatile all-rounder. Azriel is the extended-endurance platform for heavier payloads and longer, more specialised missions.'
	},
	{
		q: 'Does D Aerospace provide pilot’s lessons or any trainings?',
		a: 'Yes. Part of our mission is to educate and support operators. We provide training and a growing knowledge centre so every customer can get the most out of their drone.'
	}
];

export const serviceFaqs = [
	{
		q: 'What is the significance of concept development in custom drone development, and what does it entail?',
		a: 'Concept development defines the mission the drone must serve. We analyse the target market, study existing products, specify features and configurations, run an economic assessment and set a strategic timeline — the foundation everything else is built on.'
	},
	{
		q: 'How does the team determine the target characteristics of a new drone during concept development?',
		a: 'We start from the real needs of the application and sector, then translate those into measurable requirements: payload, range, endurance, environmental resistance and sensor suite.'
	},
	{
		q: 'What factors are considered during the economic analysis phase of drone development?',
		a: 'We weigh in-house production versus external procurement, assess suppliers, and consider the marketing case for additions or an entire product line — so the design is viable, not just capable.'
	},
	{
		q: 'Could you outline the key components involved in the systems design stage?',
		a: 'System design fixes the configuration and runs the core calculations — airframe, propulsion, power, flight controller and payload integration — and decides where each component comes from.'
	},
	{
		q: 'What types of tests are conducted during the prototype testing phase?',
		a: 'Prototypes are flown to verify performance and behaviour against specification, exposing weak points and improvement areas from genuine first real-world use.'
	}
];

// ---------------------------------------------------------------
//  ABOUT
// ---------------------------------------------------------------
export const about = {
	heading: 'Established In 2022',
	body: [
		'D Aerospace started with a vision of a different drone, an enhanced one. We wanted to build and innovate in the Unmanned Aerial Vehicle (UAV) field because we truly see the future in industrial-sized drones, resistant to any weather change and condition, fit for any sector and any need.',
		'We started playing around with materials and textures so that the construction could be optimal.',
		'Then, our team of skilled engineers made the necessary calculations so that the drones would truly outlast and outperform even the biggest players in the industry.',
		'Our focus shifted to how we could build around the frame, how personal we could truly take it — a different camera type for the different sectors they would be used in, various legs for various landing conditions, sensors that would adapt according to the industry, boxes that could carry payload without compromising the flight time.',
		'The next step was the battery — we understood that there was no universal solution for one, as some needed more flight time than others, so naturally, we developed several ones based on the preference of our clients.',
		'Taking it even further, we knew we had the responsibility to educate and help out in the beginning, therefore developing a support system and knowledge center that every customer could benefit from.',
		'D Aerospace was built not only as a business, but as a reliable provider of drone services. Our aim is to elevate the drone experience and make it easier for you to pilot to new spaces.'
	],
	partners: [
		{ name: 'Vitosha Venture Partners', logo: '/img/partners/vitosha.png' },
		{ name: 'Fund of Funds', logo: '/img/partners/fund-of-funds.png', invert: true },
		{ name: 'One Direction — Many Opportunities', logo: '/img/partners/one-direction.png' },
		{ name: 'European Regional Development Fund', logo: '/img/partners/eu-dev-fund.png' }
	]
};

// ---------------------------------------------------------------
//  RESOURCE LIBRARY
// ---------------------------------------------------------------
// Flat, filterable resource library (searchable by title + category + format).
export const resourceFiles = [
	{
		title: 'Selection and parameters of materials for hexacopter construction and design of its frame',
		category: 'Published Papers',
		format: 'PDF',
		desc: 'A study of material selection and frame design parameters for hexacopter construction.',
		pages: 18,
		thumb: '/img/papers/paper-1.png',
		href: 'https://d-aerospace.com/?page_id=926'
	},
	{
		title: 'Comparative strength calculation and manufacturing technology of hexacopter structural elements',
		category: 'Published Papers',
		format: 'PDF',
		desc: 'Comparative strength analysis and manufacturing technology for hexacopter structural elements.',
		pages: 22,
		thumb: '/img/papers/paper-2.png',
		href: 'https://d-aerospace.com/?page_id=926#comparative-strength-calculation-and--manufacturing-technology-of-hexacopter--structural-elements'
	},
	{
		title: 'Salvatore — Technical Datasheet',
		category: 'Datasheets',
		format: 'PDF',
		desc: 'Full specifications, dimensions and payload options for Salvatore.',
		pages: 4
	},
	{
		title: 'Azriel — Technical Datasheet',
		category: 'Datasheets',
		format: 'PDF',
		desc: 'Extended-endurance platform specifications for Azriel.',
		pages: 4
	},
	{
		title: 'Lifter — Technical Datasheet',
		category: 'Datasheets',
		format: 'PDF',
		desc: 'Heavy-lift frame specifications and operating limits.',
		pages: 4
	},
	{
		title: 'Getting Started with Your Drone',
		category: 'Guides',
		format: 'PDF',
		desc: 'First flight, calibration and pre-flight checks.',
		pages: 12
	},
	{
		title: 'Ground Control Station Manual',
		category: 'Guides',
		format: 'PDF',
		desc: 'Operating the Herelink controller and planning missions.',
		pages: 28
	},
	{
		title: 'Maintenance & Care',
		category: 'Guides',
		format: 'DOC',
		desc: 'Keeping your fleet airworthy season after season.',
		pages: 9
	},
	{
		title: 'Choosing the Right Drone for Your Sector',
		category: 'Articles',
		format: 'Article',
		desc: 'Match platform, payload and endurance to your mission.',
		pages: 6
	},
	{
		title: 'Understanding Flight Controllers',
		category: 'Articles',
		format: 'Article',
		desc: 'Pixhawk, Cube Orange/Blue, ArduPilot and PX4 explained.',
		pages: 7
	},
	{
		title: 'Payload & Sensor Options',
		category: 'Articles',
		format: 'Article',
		desc: 'Cameras, thermal, Lidar and custom payloads.',
		pages: 5
	}
];

export const resourceCategories = ['All', ...new Set(resourceFiles.map((r) => r.category))];
export const resourceFormats = ['All', ...new Set(resourceFiles.map((r) => r.format))];
