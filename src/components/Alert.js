export default function Alert(props){
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" id="alert">
            <strong>Holy guacamole!</strong> {props.alert.message}
        </div>
    );
}