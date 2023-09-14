import { getChainOptions, } from '@terra-money/wallet-controller';
import { useEffect, useState } from 'react';
export function useChainOptions() {
    const [chainOptions, setChainOptions] = useState(null);
    useEffect(() => {
        getChainOptions().then(setChainOptions);
    }, []);
    return chainOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2hhaW5PcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93YWxsZXQtcHJvdmlkZXIvdXNlQ2hhaW5PcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxlQUFlLEdBRWhCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFNUMsTUFBTSxVQUFVLGVBQWU7SUFDN0IsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FDbkMsUUFBUSxDQUFzQyxJQUFJLENBQUMsQ0FBQztJQUV0RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRDaGFpbk9wdGlvbnMsXG4gIFdhbGxldENvbnRyb2xsZXJDaGFpbk9wdGlvbnMsXG59IGZyb20gJ0B0ZXJyYS1tb25leS93YWxsZXQtY29udHJvbGxlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hhaW5PcHRpb25zKCk6IFdhbGxldENvbnRyb2xsZXJDaGFpbk9wdGlvbnMgfCBudWxsIHtcbiAgY29uc3QgW2NoYWluT3B0aW9ucywgc2V0Q2hhaW5PcHRpb25zXSA9XG4gICAgdXNlU3RhdGU8V2FsbGV0Q29udHJvbGxlckNoYWluT3B0aW9ucyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2hhaW5PcHRpb25zKCkudGhlbihzZXRDaGFpbk9wdGlvbnMpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNoYWluT3B0aW9ucztcbn1cbiJdfQ==