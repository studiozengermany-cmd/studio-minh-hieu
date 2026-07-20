import { Component, type ErrorInfo, type ReactNode } from "react";
import { reportLovableError } from "@/lib/lovable-error-reporting";

interface Props {
  name: string;
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Client-side error boundary for non-critical UI widgets.
 * Isolates crashes (canvas, animation, network) so a broken widget
 * never takes down the whole page. Renders `fallback` (default: nothing).
 */
export class SafeBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`[SafeBoundary:${this.props.name}]`, error, info.componentStack);
    try {
      reportLovableError(error, {
        boundary: "safe_boundary",
        widget: this.props.name,
      });
    } catch {
      /* reporting must never itself throw */
    }
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
