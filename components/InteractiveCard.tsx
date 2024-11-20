'use client'
export default function InteractionCard ({children, contentName} : {children : React.ReactNode, contentName : string}) {

    function onCardMouseAction(event : React.SyntheticEvent) {
        if(event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('bg-neutral-200');
        }
        else {
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('bg-white');
        }
    }

    function onCardSelected() {
        // alert("You Select " + contentName)
    }

    return (
        <div className="w-full h-[420px] bg-white shadow-lg rounded-lg mt-[10px] ml-[10px] overflow-hidden"
        onClick={()=>onCardSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}