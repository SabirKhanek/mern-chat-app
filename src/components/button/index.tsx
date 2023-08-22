export interface ButtonProps {
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    children?: React.ReactNode
}

export default function Button({ className, onClick, type, disabled, children }: ButtonProps) {
    return (
        <button type={type} className={'w-full bg-[#F9ED32] py-2 px-2text-2xl font-bold rounded-lg hover:rotate-1 cursor-pointer scale-105 transition-all duration-100' + ' ' + className} onClick={onClick} disabled={disabled || false} >
            {children}
        </button >
    )
}