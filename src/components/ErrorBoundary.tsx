import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle size={32} />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Oups, un imprévu !</h2>
                        <p className="text-gray-600 mb-6">
                            L'application a rencontré un petit problème. Pas d'inquiétude, cela arrive !
                        </p>
                        
                        <div className="bg-gray-50 p-3 rounded-lg text-left overflow-hidden mb-6 border border-gray-100">
                            <p className="text-xs font-mono text-gray-500 truncate">
                                {this.state.error?.message || "Erreur inconnue"}
                            </p>
                        </div>
                        
                        <button
                            className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-md shadow-orange-200"
                            onClick={() => window.location.reload()}
                        >
                            <RefreshCw size={20} />
                            Recharger l'application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
