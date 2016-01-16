"use strict";

import { tardigradeEngine } from "../../node_modules/tardigrade/target/engine/engine";
import { tardigradeParser } from "../../node_modules/tardigrade/target/engine/parser";
import { createElement, domChain, indexOf } from "../../node_modules/tardigrade/target/engine/runtime";



export interface ConsolePanelTemplateDto {
    _root?: string;
}

export interface ConsolePanelTemplateElement {
    _root(): HTMLElement;
    output(): HTMLElement;
input(): HTMLElement;

}

class ConsolePanelTemplate {
    ensureLoaded() {
    }
    
    constructor() {
        
        
        tardigradeEngine.addTemplate("ConsolePanel", tardigradeParser.parseTemplate(`<html>
<body>
<div class="console-panel">
    <div x-id="output" class='console-output'></div>
    <form action="#" class='console-input'>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input x-id="input" class="mdl-textfield__input" type="text" id="sample3">
            <label class="mdl-textfield__label" for="sample3">enter a command, or just "?" to get help</label>
        </div>
    </form>
</div>
</body>
</html>`));
    }

    buildHtml(dto: ConsolePanelTemplateDto) {
        return tardigradeEngine.buildHtml("ConsolePanel", dto);
    }

    buildElement(dto: ConsolePanelTemplateDto) {
        return createElement(this.buildHtml(dto));
    }

    of(rootElement: HTMLElement): ConsolePanelTemplateElement {
        let domlet = {
            _root() { return rootElement; },
            
            output(): HTMLElement{
return tardigradeEngine.getPoint(rootElement, "ConsolePanel", { "output": 0 });
},

input(): HTMLElement{
return tardigradeEngine.getPoint(rootElement, "ConsolePanel", { "input": 0 });
},


        };
        
        return domlet;
    }
}

export var consolePanelTemplate = new ConsolePanelTemplate();