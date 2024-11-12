import { ReactNode } from 'react';

type BadgeProps = {
	children: ReactNode;
	className?: string;
};

export default function Badge(props: BadgeProps) {
	const { children, className = '' } = props;
	return (
		<div
			className={`bg-violet-600 rounded-full flex items-center px-8 py-4 justify-center text-white gap-3 font-bold text-sm shadow-2xl ${className}`}
		>
			{children}
		</div>
	);
}
