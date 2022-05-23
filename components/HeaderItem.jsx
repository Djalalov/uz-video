const HeaderItem = ({ title, Icon }) => {
	return (
		<div className="flex-col w-20 group cursor-pointer hover:text-orange-400 ">
			<Icon className="h-8 group-hover:animate-bounce w-full" />
			<p className="tracking-widest text-center opacity-0 group-hover:opacity-100 mb-4 text-sm">
				{title}
			</p>
		</div>
	);
};

export default HeaderItem;
