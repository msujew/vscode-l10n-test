// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "l10n-test" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('l10n-test.helloWorld', () => {
		vscode.window.showInformationMessage(vscode.l10n.t('Hello World!'));
    }));
    
	context.subscriptions.push(vscode.commands.registerCommand('l10n-test.uri', () => {
		vscode.window.showInformationMessage(vscode.l10n.uri?.toString() ?? 'UNDEFINED');
    }));
    
    context.subscriptions.push(vscode.commands.registerCommand('l10n-test.bundle', () => {
		vscode.window.showInformationMessage(JSON.stringify(vscode.l10n.bundle));
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
