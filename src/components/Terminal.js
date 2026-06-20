"use client";

import { useRef, useState } from "react";
import { terminalJokes, terminalResponses } from "./content";

export default function Terminal() {
  const [value, setValue] = useState("");
  const [lines, setLines] = useState([
    { type: "cmd", text: "whoami" },
    {
      type: "output",
      text: "a developer who'd rather you type something than read another bio.",
    },
    { type: "cmd-label", text: "try one of:" },
    { type: "output", text: "help · skills · projects · joke · coffee" },
  ]);
  const bodyRef = useRef(null);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  }

  function handleCommand(raw) {
    const key = raw.trim().toLowerCase();
    if (!key) return;

    if (key === "clear") {
      setLines([]);
      return;
    }

    const newLines = [{ type: "cmd", text: raw }];

    if (key === "joke") {
      newLines.push({
        type: "success",
        text: terminalJokes[Math.floor(Math.random() * terminalJokes.length)],
      });
    } else if (terminalResponses[key]) {
      newLines.push({ type: "success", text: terminalResponses[key] });
    } else {
      newLines.push({ type: "output", text: `command not found: ${raw} — try "help"` });
    }

    setLines((prev) => [...prev, ...newLines]);
    scrollToBottom();
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && value.trim() !== "") {
      handleCommand(value);
      setValue("");
    }
  }

  return (
    <div className="terminal">
      <div className="term-bar">
        <span className="term-dot"></span>
        <span className="term-dot"></span>
        <span className="term-dot"></span>
        <span className="term-title">jaggy — zsh</span>
      </div>
      <div className="term-body" ref={bodyRef}>
        {lines.map((line, i) => {
          if (line.type === "cmd") {
            return (
              <div className="term-line" key={i}>
                <span className="prompt-sym">$</span>
                {line.text}
              </div>
            );
          }
          if (line.type === "cmd-label") {
            return (
              <div className="term-line" style={{ marginTop: "10px" }} key={i}>
                <span className="prompt-sym">$</span>
                {line.text}
              </div>
            );
          }
          if (line.type === "success") {
            return (
              <div className="term-success" key={i}>
                {line.text}
              </div>
            );
          }
          return (
            <div className="term-output" key={i}>
              {line.text}
            </div>
          );
        })}

        <div className="term-input-row">
          <span className="prompt-sym">$</span>
          <input
            id="termInput"
            type="text"
            placeholder="type a command…"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
