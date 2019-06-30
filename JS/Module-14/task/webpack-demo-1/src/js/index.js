import "../css/style.css";
import Model from './model';
import View from './view';
import Controller from './controller';
import EventEmitter from './services/event-emitter';

const view = new View();
const model = new Model();

new Controller(model, view);
