import ObjectiveRow from "./ObjectiveRow";

const ObjectivesList = (props) => {
  console.log("ObjectivesList function executed. props.objectives.length=" + props.objectives.length);
  return (
    <table>
      <tbody>
        {
          props.objectives.map( (obj,index) => {
            return <ObjectiveRow 
              key={obj.id} 
              {...obj}
            />
          })
        }
      </tbody>
    </table>
  );
};

export default ObjectivesList;
