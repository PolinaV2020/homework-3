const Text = (props) => {
  return <p style={{ color: props.color, fontSize: props.fontSize, textDecoration: props.underlined ? "underline" : "none" }}>{props.value}</p>
}

export default Text;