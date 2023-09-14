"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChainOptions = void 0;
const wallet_controller_1 = require("@terra-money/wallet-controller");
const react_1 = require("react");
function useChainOptions() {
    const [chainOptions, setChainOptions] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        (0, wallet_controller_1.getChainOptions)().then(setChainOptions);
    }, []);
    return chainOptions;
}
exports.useChainOptions = useChainOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ2hhaW5PcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93YWxsZXQtcHJvdmlkZXIvdXNlQ2hhaW5PcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUd3QztBQUN4QyxpQ0FBNEM7QUFFNUMsU0FBZ0IsZUFBZTtJQUM3QixNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUNuQyxJQUFBLGdCQUFRLEVBQXNDLElBQUksQ0FBQyxDQUFDO0lBRXRELElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7UUFDYixJQUFBLG1DQUFlLEdBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQVRELDBDQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0Q2hhaW5PcHRpb25zLFxuICBXYWxsZXRDb250cm9sbGVyQ2hhaW5PcHRpb25zLFxufSBmcm9tICdAdGVycmEtbW9uZXkvd2FsbGV0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoYWluT3B0aW9ucygpOiBXYWxsZXRDb250cm9sbGVyQ2hhaW5PcHRpb25zIHwgbnVsbCB7XG4gIGNvbnN0IFtjaGFpbk9wdGlvbnMsIHNldENoYWluT3B0aW9uc10gPVxuICAgIHVzZVN0YXRlPFdhbGxldENvbnRyb2xsZXJDaGFpbk9wdGlvbnMgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENoYWluT3B0aW9ucygpLnRoZW4oc2V0Q2hhaW5PcHRpb25zKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGFpbk9wdGlvbnM7XG59XG4iXX0=