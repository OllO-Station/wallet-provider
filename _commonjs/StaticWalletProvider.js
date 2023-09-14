"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticWalletProvider = void 0;
const use_wallet_1 = require("@nestwallet/use-wallet");
const react_1 = __importStar(require("react"));
function StaticWalletProvider({ children, defaultNetwork, status = use_wallet_1.WalletStatus.INITIALIZING, availableConnectTypes = [], availableInstallTypes = [], availableConnections = [], availableInstallations = [], wallets = [], supportFeatures = new Set(), connection = undefined, }) {
    const state = (0, react_1.useMemo)(() => {
        return {
            availableConnectTypes,
            availableInstallTypes,
            availableConnections,
            availableInstallations,
            status,
            network: defaultNetwork,
            wallets,
            supportFeatures,
            connection,
            install: () => {
                throw new Error('not implemented!');
            },
            connect: () => {
                throw new Error('not implemented!');
            },
            connectReadonly: () => {
                throw new Error('not implemented!');
            },
            disconnect: () => {
                throw new Error('not implemented!');
            },
            post: () => {
                throw new Error('not implemented!');
            },
            sign: () => {
                throw new Error('not implemented!');
            },
            signBytes: () => {
                throw new Error('not implemented!');
            },
            refetchStates: () => {
                throw new Error('not implemented!');
            },
            recheckStatus: () => {
                throw new Error('not implemented!');
            },
            isChromeExtensionCompatibleBrowser: () => {
                throw new Error('not implemented!');
            },
            hasCW20Tokens: () => {
                throw new Error('not implemented!');
            },
            addCW20Tokens: () => {
                throw new Error('not implemented!');
            },
            hasNetwork: () => {
                throw new Error('not implemented!');
            },
            addNetwork: () => {
                throw new Error('not implemented!');
            },
        };
    }, [
        availableConnectTypes,
        availableInstallTypes,
        availableConnections,
        availableInstallations,
        status,
        defaultNetwork,
        wallets,
        supportFeatures,
        connection,
    ]);
    return (react_1.default.createElement(use_wallet_1.WalletContext.Provider, { value: state }, children));
}
exports.StaticWalletProvider = StaticWalletProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljV2FsbGV0UHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQHRlcnJhLW1vbmV5L3dhbGxldC1wcm92aWRlci9TdGF0aWNXYWxsZXRQcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFTaUM7QUFDakMsK0NBQWtEO0FBZWxELFNBQWdCLG9CQUFvQixDQUFDLEVBQ25DLFFBQVEsRUFDUixjQUFjLEVBQ2QsTUFBTSxHQUFHLHlCQUFZLENBQUMsWUFBWSxFQUNsQyxxQkFBcUIsR0FBRyxFQUFFLEVBQzFCLHFCQUFxQixHQUFHLEVBQUUsRUFDMUIsb0JBQW9CLEdBQUcsRUFBRSxFQUN6QixzQkFBc0IsR0FBRyxFQUFFLEVBQzNCLE9BQU8sR0FBRyxFQUFFLEVBQ1osZUFBZSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQzNCLFVBQVUsR0FBRyxTQUFTLEdBQ0k7SUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBQSxlQUFPLEVBQVMsR0FBRyxFQUFFO1FBQ2pDLE9BQU87WUFDTCxxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsTUFBTTtZQUNOLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE9BQU87WUFDUCxlQUFlO1lBQ2YsVUFBVTtZQUNWLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsZUFBZSxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO2dCQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsYUFBYSxFQUFFLEdBQUcsRUFBRTtnQkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxhQUFhLEVBQUUsR0FBRyxFQUFFO2dCQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtnQkFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxhQUFhLEVBQUUsR0FBRyxFQUFFO2dCQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELGFBQWEsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQkFDZixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7Z0JBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQyxFQUFFO1FBQ0QscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLE1BQU07UUFDTixjQUFjO1FBQ2QsT0FBTztRQUNQLGVBQWU7UUFDZixVQUFVO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNMLDhCQUFDLDBCQUFhLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLElBQUcsUUFBUSxDQUEwQixDQUMxRSxDQUFDO0FBQ0osQ0FBQztBQWpGRCxvREFpRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXJyYVdlYkV4dGVuc2lvbkZlYXR1cmVzIH0gZnJvbSAnQHRlcnJhLW1vbmV5L3dlYi1leHRlbnNpb24taW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb24sXG4gIENvbm5lY3RUeXBlLFxuICBJbnN0YWxsYXRpb24sXG4gIE5ldHdvcmtJbmZvLFxuICBXYWxsZXQsXG4gIFdhbGxldENvbnRleHQsXG4gIFdhbGxldEluZm8sXG4gIFdhbGxldFN0YXR1cyxcbn0gZnJvbSAnQHRlcnJhLW1vbmV5L3VzZS13YWxsZXQnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0aWNXYWxsZXRQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgZGVmYXVsdE5ldHdvcms6IE5ldHdvcmtJbmZvO1xuICBzdGF0dXM/OiBXYWxsZXRTdGF0dXM7XG4gIGF2YWlsYWJsZUNvbm5lY3RUeXBlcz86IENvbm5lY3RUeXBlW107XG4gIGF2YWlsYWJsZUluc3RhbGxUeXBlcz86IENvbm5lY3RUeXBlW107XG4gIGF2YWlsYWJsZUNvbm5lY3Rpb25zPzogQ29ubmVjdGlvbltdO1xuICBhdmFpbGFibGVJbnN0YWxsYXRpb25zPzogSW5zdGFsbGF0aW9uW107XG4gIHdhbGxldHM/OiBXYWxsZXRJbmZvW107XG4gIHN1cHBvcnRGZWF0dXJlcz86IFNldDxUZXJyYVdlYkV4dGVuc2lvbkZlYXR1cmVzPjtcbiAgY29ubmVjdGlvbj86IENvbm5lY3Rpb24gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdGF0aWNXYWxsZXRQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxuICBkZWZhdWx0TmV0d29yayxcbiAgc3RhdHVzID0gV2FsbGV0U3RhdHVzLklOSVRJQUxJWklORyxcbiAgYXZhaWxhYmxlQ29ubmVjdFR5cGVzID0gW10sXG4gIGF2YWlsYWJsZUluc3RhbGxUeXBlcyA9IFtdLFxuICBhdmFpbGFibGVDb25uZWN0aW9ucyA9IFtdLFxuICBhdmFpbGFibGVJbnN0YWxsYXRpb25zID0gW10sXG4gIHdhbGxldHMgPSBbXSxcbiAgc3VwcG9ydEZlYXR1cmVzID0gbmV3IFNldCgpLFxuICBjb25uZWN0aW9uID0gdW5kZWZpbmVkLFxufTogU3RhdGljV2FsbGV0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBzdGF0ZSA9IHVzZU1lbW88V2FsbGV0PigoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZUNvbm5lY3RUeXBlcyxcbiAgICAgIGF2YWlsYWJsZUluc3RhbGxUeXBlcyxcbiAgICAgIGF2YWlsYWJsZUNvbm5lY3Rpb25zLFxuICAgICAgYXZhaWxhYmxlSW5zdGFsbGF0aW9ucyxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG5ldHdvcms6IGRlZmF1bHROZXR3b3JrLFxuICAgICAgd2FsbGV0cyxcbiAgICAgIHN1cHBvcnRGZWF0dXJlcyxcbiAgICAgIGNvbm5lY3Rpb24sXG4gICAgICBpbnN0YWxsOiAoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIScpO1xuICAgICAgfSxcbiAgICAgIGNvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQhJyk7XG4gICAgICB9LFxuICAgICAgY29ubmVjdFJlYWRvbmx5OiAoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIScpO1xuICAgICAgfSxcbiAgICAgIGRpc2Nvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQhJyk7XG4gICAgICB9LFxuICAgICAgcG9zdDogKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICAgIH0sXG4gICAgICBzaWduOiAoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIScpO1xuICAgICAgfSxcbiAgICAgIHNpZ25CeXRlczogKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICAgIH0sXG4gICAgICByZWZldGNoU3RhdGVzOiAoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIScpO1xuICAgICAgfSxcbiAgICAgIHJlY2hlY2tTdGF0dXM6ICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQhJyk7XG4gICAgICB9LFxuICAgICAgaXNDaHJvbWVFeHRlbnNpb25Db21wYXRpYmxlQnJvd3NlcjogKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICAgIH0sXG4gICAgICBoYXNDVzIwVG9rZW5zOiAoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIScpO1xuICAgICAgfSxcbiAgICAgIGFkZENXMjBUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQhJyk7XG4gICAgICB9LFxuICAgICAgaGFzTmV0d29yazogKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCEnKTtcbiAgICAgIH0sXG4gICAgICBhZGROZXR3b3JrOiAoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIScpO1xuICAgICAgfSxcbiAgICB9O1xuICB9LCBbXG4gICAgYXZhaWxhYmxlQ29ubmVjdFR5cGVzLFxuICAgIGF2YWlsYWJsZUluc3RhbGxUeXBlcyxcbiAgICBhdmFpbGFibGVDb25uZWN0aW9ucyxcbiAgICBhdmFpbGFibGVJbnN0YWxsYXRpb25zLFxuICAgIHN0YXR1cyxcbiAgICBkZWZhdWx0TmV0d29yayxcbiAgICB3YWxsZXRzLFxuICAgIHN1cHBvcnRGZWF0dXJlcyxcbiAgICBjb25uZWN0aW9uLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxXYWxsZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvV2FsbGV0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdfQ==