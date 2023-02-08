import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AddIcon from "@mui/icons-material/Add";
import AtIcon from "@mui/icons-material/AlternateEmail";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TextIcon from "@mui/icons-material/TextFormat";
import MicNoneIcon from "@mui/icons-material/MicNone";
import "./MessageInput.css";
function MessageInput(props) {
  return (
    <div className="user__chatInput">
      <form>
        <input
          placeholder={props.placeholder}
          value={props.message}
          onChange={props.onMessageChange}
        />
        <div className="toolbar">
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <EmojiIcon />
          </IconButton>
          <IconButton>
            <AtIcon />
          </IconButton>
          <IconButton>
            <TextIcon />
          </IconButton>
          <IconButton>
            <MicNoneIcon />
          </IconButton>
          <IconButton type="submit" onClick={props.onMessageSubmit}>
            <SendIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
