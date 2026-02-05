/**
 * USWDS Step Indicator — Figma frame 1892:3022
 *
 * Figma measurements:
 *   Segment bar: h 8px
 *   Complete: bg #005ea2 (primary)
 *   Active:   bg #005ea2 (primary)
 *   Default:  bg #dcdee0 (base-lighter)
 *   Counter (active): circle 32px bg-primary, white text 16px/700
 *   Counter (complete): circle 32px bg-primary with checkmark
 *   Counter (default): circle 32px bg-white, border 2px base-lighter, text 16px
 *   Counter small: circle 24px
 *   Heading: "Step X of Y" in 22px/400 primary, step label 22px/700 base-darkest
 *   Labels: 16px/400, active is 16px/700
 */

export interface StepIndicatorStep {
  label: string;
}

export type StepIndicatorVariant = 'default' | 'no-labels' | 'centered' | 'counters' | 'counters-small';

export interface StepIndicatorProps {
  steps: StepIndicatorStep[];
  currentStep: number;
  variant?: StepIndicatorVariant;
  headingLevel?: 'h2' | 'h3' | 'h4';
  className?: string;
}

function CheckIcon({ size }: { size: number }) {
  return (
    <svg
      className={`h-${size === 24 ? 3 : 4} w-${size === 24 ? 3 : 4}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

export function StepIndicator({
  steps,
  currentStep,
  variant = 'default',
  headingLevel: Heading = 'h4',
  className = '',
}: StepIndicatorProps) {
  const showLabels = variant !== 'no-labels';
  const centered = variant === 'centered';
  const showCounters = variant === 'counters' || variant === 'counters-small';
  const counterSmall = variant === 'counters-small';
  const circleSize = counterSmall ? 'h-6 w-6 text-sm' : 'h-8 w-8 text-base';

  return (
    <div className={`font-sans ${className}`} aria-label="progress">
      {/* Segment bar */}
      <ol className="flex gap-1">
        {steps.map((step, i) => {
          const isComplete = i < currentStep;
          const isActive = i === currentStep;

          return (
            <li
              key={step.label}
              className={`flex flex-1 flex-col ${centered ? 'items-center' : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {/* Bar + Counter row */}
              <div className={`flex w-full flex-col ${centered ? 'items-center' : ''}`}>
                {!showCounters && (
                  <div
                    className={`h-2 w-full rounded-sm ${
                      isComplete || isActive ? 'bg-primary' : 'bg-base-lighter'
                    }`}
                  />
                )}

                {showCounters && (
                  <div className="flex w-full items-center gap-0">
                    {/* Bar before counter */}
                    {i > 0 && (
                      <div
                        className={`h-1 flex-1 ${isComplete ? 'bg-primary' : 'bg-base-lighter'}`}
                      />
                    )}
                    {/* Counter circle */}
                    <div
                      className={`flex shrink-0 items-center justify-center rounded-full font-bold ${circleSize} ${
                        isComplete
                          ? 'bg-primary text-white'
                          : isActive
                            ? 'bg-primary text-white'
                            : 'border-2 border-base-lighter bg-white text-base-dark'
                      }`}
                    >
                      {isComplete ? <CheckIcon size={counterSmall ? 24 : 32} /> : i + 1}
                    </div>
                    {/* Bar after counter */}
                    {i < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 ${isComplete ? 'bg-primary' : 'bg-base-lighter'}`}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Label */}
              {showLabels && (
                <span
                  className={`mt-1 text-sm ${
                    isActive ? 'font-bold text-base-darkest' : 'text-base-dark'
                  } ${centered ? 'text-center' : ''}`}
                >
                  {step.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* Heading */}
      <div className="mt-4">
        <Heading className="text-heading-lg">
          <span className="font-normal text-primary">
            Step {currentStep + 1} of {steps.length}{' '}
          </span>
          <span className="font-bold text-base-darkest">{steps[currentStep]?.label}</span>
        </Heading>
      </div>
    </div>
  );
}
