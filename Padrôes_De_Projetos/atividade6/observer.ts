// EventDispatcher para gerenciar eventos
class EventDispatcher {
  private listeners: { [event: string]: Function[] } = {};

  addEventListener(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  dispatchEvent(event: string, data?: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(data));
    }
  }
}

// Classe base TextEditor
class TextEditor extends EventDispatcher {
  protected lines: string[] = [];

  insertLine(lineNumber: number, text: string) {
    this.lines.splice(lineNumber - 1, 0, text);
  }

  removeLine(lineNumber: number) {
    this.lines.splice(lineNumber - 1, 1);
  }

  open() {
    this.dispatchEvent("open");
  }

  save() {
    this.dispatchEvent("save", this.lines.join("\n"));
  }
}

// Implementação específica do TextEditor
class MyTextEditor extends TextEditor {
  startEditing() {
    console.log("Digite suas linhas de texto. Digite 'EOF' para encerrar.");

    let lineNumber = 1;
    let userInput: string;

    while ((userInput = prompt(`Digite a linha ${lineNumber} ou 'EOF' para encerrar:`)) !== 'EOF') {
      this.insertLine(lineNumber, userInput);
      lineNumber++;
    }

    this.save();
  }
}

// Uso do MyTextEditor
const textEditor = new MyTextEditor();

// Adiciona um ouvinte para o evento "save"
textEditor.addEventListener("save", (content) => {
  console.log("Salvando conteúdo no arquivo:");
  console.log(content);
});

// Abre o editor de texto
textEditor.open();

// Inicia o processo de edição
textEditor.startEditing();
