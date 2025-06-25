import NextImage from 'next/image';


export default function Taskbar() {
  return (<>
      <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '41px',
        width: '100%',
        backgroundColor: '#B2B3B2',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2px',
        zIndex: 1,
        borderTop: '2px solid white',
        borderBottom: '2px solid gray',
      }}
    >
    <button
  className="btn btn-primary d-flex align-items-center justify-content-center"
  style={{
    width: '124px',
    height: '41px',
    padding: '0 6px',
    fontFamily: '"windows", sans-serif', 
    fontSize: '14px',

  }}
>
  <NextImage
    src="/icons/spacepc.ico"
    alt="Start"
    width={20}
    height={16}
    style={{ marginRight: '6px' }}
  />
  Start
</button>
    </div>
      </>
  );
}
