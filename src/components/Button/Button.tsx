import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};

export default function Button({
	children,
	className = '',
	type = 'button',
	onClick,
}: ButtonProps) {
	return (
		<button
			type={type}
			className={`bg-violet-700 text-white text-sm font-bold px-8 py-4 rounded-full border border-transparent flex items-center gap-2 hover:shadow-2xl hover:shadow-violet-200 transition-all ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
