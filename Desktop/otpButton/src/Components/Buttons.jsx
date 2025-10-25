
function Buttons({
	disabled,
	onClick,
	children
}) {
  return (
    <div className={`${disabled ? "bg-grey-200" : "bg-blu-600"}  text-white px-10 py-5 text-2xl rounded-2xl`}>
     {children}
    </div>
  )
}

export default Buttons