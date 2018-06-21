const BaseComponent = require("./ww-base-component");
const anime = require("animejs");

class InputMaterial extends BaseComponent {

    constructor(type = "text") {
        super("div");

        this.assistiveTextAdded = false;
        this.labelActiveColor = "#1f5295";
        this.labelColor = "#a5a5a5";
        this.borderColor = "#c6c6c6";

        this.inputSubContainer = document.createElement("div");
        this.inputSubContainerCenterPart = document.createElement("div");
        this.labelContainer = document.createElement("div");
        this.el.label = document.createElement("span");
        this.el.input = document.createElement("input");
        this.assistiveText = document.createElement("div");

        this.labelContainer.appendChild(this.el.label);
        this.inputSubContainerCenterPart.appendChild(this.labelContainer);
        this.inputSubContainerCenterPart.appendChild(this.el.input);
        this.inputSubContainer.appendChild(this.inputSubContainerCenterPart);
        this.el.appendChild(this.inputSubContainer);

        this.addClass("ww-input__container");
        BaseComponent.addClass(this.el.label, "ww-input__label");
        BaseComponent.addClass(this.inputSubContainer, "ww-input__sub-container");
        BaseComponent.addClass(this.inputSubContainerCenterPart, "ww-input__center");
        BaseComponent.addClass(this.labelContainer, "ww-input__label-container");
        BaseComponent.addClass(this.assistiveText, "ww-input__assistive-text");
        BaseComponent.addClass(this.el.input, "ww-input");

        this.setType(type);

        this.el.input.addEventListener("focus", () => {
            anime({
                targets: this.el.label,
                translateY: "-9",
                fontSize: "12px",
                color: this.labelActiveColor,
                duration: 100,
                easing: "easeOutExpo"
            });

            anime({
                targets: this.inputSubContainer,
                borderColor: this.labelActiveColor,
                duration: 100,
                easing: "easeOutExpo"
            });
        });

        this.el.input.addEventListener("blur", () => {
            if (this.el.input.value.trim() === "") {
                anime({
                    targets: this.el.label,
                    translateY: "1",
                    fontSize: "16px",
                    color: this.labelColor,
                    duration: 100,
                    easing: "easeOutExpo"
                });

                anime({
                    targets: this.inputSubContainer,
                    borderColor: this.borderColor,
                    duration: 100,
                    easing: "easeOutExpo"
                });
            }
        });

        this.el.onAttachedToDom = () => {
            let obj = this.inputSubContainer;
            this.labelContainer.style.height = obj.offsetHeight - 2 + "px";
            this.el.label.style.top = obj.offsetHeight / 2 - this.el.label.offsetHeight / 2 + "px";
        };
    }

    disable() {
        this.el.setAttribute("disabled", "");
        return this;
    }

    enable() {
        this.el.removeAttribute("disabled");
        return this;
    }

    onClick(fn) {
        this.el.addEventListener("click", fn);
        return this;
    }

    setType(type) {
        this.el.input.type = type;
        return this;
    }

    getPlaceholder() {
        return this.el.placeholder;
    }

    setPlaceholder(placeholder) {
        this.el.placeholder = placeholder;
        this.el.label.innerHTML = placeholder;
        return this;
    }

    setAssistiveText(text) {
        if (!this.assistiveTextAdded) {
            this.assistiveTextAdded = true;
            this.el.appendChild(this.assistiveText);
        }
        this.assistiveText.innerHTML = text;
        return this;
    }

    onInput(fn) {
        this.el.addEventListener("input", fn);
        return this;
    }

    getValue() {
        return this.el.input.value;
    }
}

module.exports = InputMaterial;