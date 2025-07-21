import { data2 } from "../data/LeftCmdata";
import "../scss/component/leftcm2.scss";

export const LeftCm2 = () => {
  const renderItem = (data: { txt: string; img: React.ComponentType } | string, key: number) => {
    const isFirstItem = key === 0;
    const isObjectData = typeof data !== 'string';
    
    if (isFirstItem && isObjectData) {
      return (
        <div key={key} className="leftcm2__item">
          <p className="leftcm2__text">{data.txt}</p>
          <div className="leftcm2__image">
            <data.img />
          </div>
        </div>
      );
    }
    
    return (
      <div key={key} className="leftcm2__playlist-item">
        <p className="leftcm2__playlist-text">{data.toString()}</p>
      </div>
    );
  };  return (
    <div className="leftcm2">
      {data2.map(renderItem)}
    </div>
  );
};
