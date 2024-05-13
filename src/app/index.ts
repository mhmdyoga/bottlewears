

interface CustomButtonProps {
    onClick?: () => void
    title?: string
    style?: string
    type?: "submit" 
    onKeyDown?: (() => void)
}