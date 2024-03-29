import hammerhead from 'testcafe-hammerhead';
import { Compiler as LegacyTestFileCompiler } from 'testcafe-legacy-api';
import EsNextTestFileCompiler from './test-file/formats/es-next/compiler';
import TypeScriptTestFileCompiler from './test-file/formats/typescript/compiler';
import CoffeeScriptTestFileCompiler from './test-file/formats/coffeescript/compiler';
import RawTestFileCompiler from './test-file/formats/raw';
import CustomizableCompilers from '../configuration/customizable-compilers';

function createTestFileCompilers (options = {}, isCompilerServiceMode) {
    return [
        new LegacyTestFileCompiler(hammerhead.processScript),
        new EsNextTestFileCompiler(isCompilerServiceMode),
        new TypeScriptTestFileCompiler(options[CustomizableCompilers.typescript], isCompilerServiceMode),
        new CoffeeScriptTestFileCompiler(),
        new RawTestFileCompiler(),
    ];
}

let testFileCompilers = [];

export function getTestFileCompilers () {
    if (!testFileCompilers.length)
        initTestFileCompilers();

    return testFileCompilers;
}

export function initTestFileCompilers (options, isCompilerServiceMode) {
    testFileCompilers = createTestFileCompilers(options, isCompilerServiceMode);
}
