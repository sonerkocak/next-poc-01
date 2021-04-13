import ButtonMU from '@material-ui/core/Button';

export default function Button({ variant, color, children }) {

    return (
        <ButtonMU {...{variant, color}}>
            {children}
        </ButtonMU>
    );
}

Button.defaultProps = {
    variant: 'contained',
    color: 'primary',
};
