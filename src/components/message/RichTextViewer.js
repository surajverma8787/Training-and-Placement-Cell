import { PropaneSharp } from "@mui/icons-material";
import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const RichTextViewer = (props) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  return props.message ? (
    <Slate editor={editor} value={JSON.parse(props.message)}>
      <Editable readOnly placeholder="" />
    </Slate>
  ) : null;
};

export default RichTextViewer;
