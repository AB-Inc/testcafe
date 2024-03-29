import TYPE from './type';
import CommandBase from './base';
import { ElementScreenshotOptions, ResizeToFitDeviceOptions } from './options';
import { initSelector } from './validations/initializers';

import {
    booleanArgument,
    positiveIntegerArgument,
    screenshotPathArgument,
    resizeWindowDeviceArgument,
    actionOptions,
} from './validations/argument';

import { generateScreenshotMark } from '../../screenshots/utils';

function initResizeToFitDeviceOptions (name, val, initOptions, validate = true) {
    return new ResizeToFitDeviceOptions(val, validate);
}

function initElementScreenshotOptions (name, val, initOptions, validate = true) {
    return new ElementScreenshotOptions(val, validate);
}

// Commands
export class TakeScreenshotBaseCommand extends CommandBase {
    constructor (obj, testRun, type, validateProperties) {
        super(obj, testRun, type, validateProperties);

        this.markSeed = null;
        this.markData = '';
    }

    generateScreenshotMark () {
        Object.assign(this, generateScreenshotMark());
    }
}

export class TakeScreenshotCommand extends TakeScreenshotBaseCommand {
    constructor (obj, testRun, validateProperties) {
        super(obj, testRun, TYPE.takeScreenshot, validateProperties);
    }

    _getAssignableProperties () {
        return [
            { name: 'path', type: screenshotPathArgument, defaultValue: '' },
            { name: 'fullPage', type: booleanArgument, defaultValue: void 0 },
            { name: 'thumbnails', type: booleanArgument, defaultValue: void 0 },
        ];
    }
}

export class TakeElementScreenshotCommand extends TakeScreenshotBaseCommand {
    constructor (obj, testRun, validateProperties) {
        super(obj, testRun, TYPE.takeElementScreenshot, validateProperties);
    }

    _getAssignableProperties () {
        return [
            { name: 'selector', init: initSelector, required: true },
            { name: 'options', init: initElementScreenshotOptions, required: true },
            { name: 'path', type: screenshotPathArgument, defaultValue: '' },
        ];
    }
}

export class TakeScreenshotOnFailCommand extends TakeScreenshotBaseCommand {
    constructor (obj, testRun) {
        super(obj, testRun, TYPE.takeScreenshotOnFail);
    }

    _getAssignableProperties () {
        return [
            { name: 'fullPage', type: booleanArgument, defaultValue: false },
        ];
    }
}

export class ResizeWindowCommand extends CommandBase {
    constructor (obj, testRun) {
        super(obj, testRun, TYPE.resizeWindow);
    }

    _getAssignableProperties () {
        return [
            { name: 'width', type: positiveIntegerArgument, required: true },
            { name: 'height', type: positiveIntegerArgument, required: true },
        ];
    }
}

export class ResizeWindowToFitDeviceCommand extends CommandBase {
    constructor (obj, testRun, validateProperties) {
        super(obj, testRun, TYPE.resizeWindowToFitDevice, validateProperties);
    }

    _getAssignableProperties () {
        return [
            { name: 'device', type: resizeWindowDeviceArgument, required: true },
            { name: 'options', type: actionOptions, init: initResizeToFitDeviceOptions, required: true },
        ];
    }
}

export class MaximizeWindowCommand {
    constructor () {
        this.type = TYPE.maximizeWindow;
    }
}
