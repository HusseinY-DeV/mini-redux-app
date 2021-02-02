import React , {useState} from 'react';



const Wrapper = (Component) => {
    const NewComponent = () => {
        const [status,setStatus] = useState(false);
        const changeStatus = () => {
            setStatus(prev => {
                return !prev;
            })
        }
        return <Component status={status} changeStatus={changeStatus} />
    }
    return NewComponent;
}
 
export default Wrapper;