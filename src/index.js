import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock';
import ConditionRendering from './ConditionRendering';
import DisplayList from './DisplayList';

ReactDOM.render(
    <div>
        <DisplayList />
        <Clock />
        <ConditionRendering />
        <Welcome name="bimbim" />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
