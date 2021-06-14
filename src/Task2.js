const Square = (props) => {
  return <div style={{ height: props.size, width: props.size, backgroundColor: props.color, marginTop: props.indent, borderRadius: props.borderRadius}}><p style={{textAlign: "center"}}>{props.text}</p></div>
}


export default Square;