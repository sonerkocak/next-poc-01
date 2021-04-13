import TextFieldMU from '@material-ui/core/TextField';

export default function TextField({ label }) {

    return (
        <TextFieldMU {...{label}} />
    );
}

TextField.defaultProps = {
};
