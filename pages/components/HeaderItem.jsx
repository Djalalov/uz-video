const HeaderItem = ({ title, Icon }) => {
	return (
		<div className="hidden md:flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-amber-600">
			<Icon className="h-8 group-hover:animate-bounce" />
			<p className="tracking-widest text-center opacity-0 group-hover:opacity-100">
				{title}
			</p>
		</div>
	);
};

export default HeaderItem;
