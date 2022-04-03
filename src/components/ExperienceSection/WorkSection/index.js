import React from "react";

export default function WorkSection(props) {
  const { title, titles, work, workLink, dates } = props;
  return (
    <div>
      {title && (
        <h4>
          {title}{" "}
          <a href={workLink} target="_blank" className="ext-link">
            @ {work}
          </a>
        </h4>
      )}
      {titles && (
        <div>
          <h4>
            <a href={workLink} target="_blank" className="ext-link">
              {work}
            </a>
          </h4>
          {titles.map((data, key) => {
            return (
              <div key={key}>
                <h4>{data.title}</h4>
                <p className="mono-font mb-1">{data.date}</p>
              </div>
            );
          })}
        </div>
      )}
      {dates && <p className="mono-font mb-1">{dates}</p>}{" "}
      <div className="mono-font">{props.children}</div>
    </div>
  );
}
