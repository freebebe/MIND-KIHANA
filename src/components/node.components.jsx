import { Fragment, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
} from "react-flow-renderer";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "KIHANA" },
    position: { x: 0, y: 0 },
  },
];

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};

const MindNode = () => {
  const [elements, setElements] = useState(initialElements);
  const [name, setName] = useState("");

  const addNode = () => {
    setElements((e) =>
      e.concat({
        id: (e.length + 1).toString(),
        data: { label: `${name}` },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      })
    );
  };

  const onConnect = (params) => setElements((e) => addEdge(params, e));
  return (
    <Fragment>
      <h1>walar</h1>
      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        style={{ width: "100%", height: "90vh" }}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
        connectionLineType="bezier"
        snapToGrid={true}
        snapGrid={[16, 16]}
      >
        <Background color="red" gap={16} />

        <MiniMap
          nodeColor={(n) => {
            // n.type === "input" ? "color: blue" : "#FFCC00";
            if (n.type === "input") return "blue";
            return "#FFCC00";
          }}
        />
        <Controls />
      </ReactFlow>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="title"
        />
        <button onClick={addNode} type="button">add node</button>
      </div>
    </Fragment>
  );
};

export default MindNode;
