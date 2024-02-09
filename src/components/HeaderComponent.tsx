import reactLogo from '../assets/react.svg';

const HeaderComponent = (props: {title: string}) => {
    return (
        <div className='flex gap-3 p-2 items-center w-2/3 mx-auto'>
            <img src={reactLogo} alt="Logo" />
            <h1 className='grow bolld text-2xl'>{props.title}</h1>
        </div>
    )
}

export default HeaderComponent;