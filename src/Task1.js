const Text = (props) => {
  return <p style={{ color: props.color, fontSize: props.fontSize, textDecoration: props.underlined==="true" ? "underline" : "none" }}>{props.value}</p>
}

export default Text;