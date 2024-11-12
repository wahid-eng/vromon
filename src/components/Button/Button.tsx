import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
};

export default function Button({
	children,
	className = '',
	onClick,
}: ButtonProps) {
	return (
		<button
			className={`bg-violet-700 text-white text-sm font-bold px-8 py-4 rounded-full ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
