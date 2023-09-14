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
exports.WalletProvider = void 0;
const use_wallet_1 = require("@terra-money/use-wallet");
const wallet_controller_1 = require("@terra-money/wallet-controller");
const react_1 = __importStar(require("react"));
const EMPTY_ARRAY = [];
const EMPTY_SUPPORT_FEATURES = new Set();
function WalletProvider({ children, defaultNetwork, walletConnectChainIds, connectorOpts, pushServerOpts, createReadonlyWalletSession, selectExtension, waitingChromeExtensionInstallCheck, dangerously__chromeExtensionCompatibleBrowserCheck, plugins, }) {
    const [controller] = (0, react_1.useState)(() => new wallet_controller_1.WalletController({
        defaultNetwork,
        walletConnectChainIds,
        connectorOpts,
        pushServerOpts,
        createReadonlyWalletSession,
        selectExtension,
        waitingChromeExtensionInstallCheck,
        dangerously__chromeExtensionCompatibleBrowserCheck,
        plugins,
    }));
    const [availableConnectTypes, setAvailableConnectTypes] = (0, react_1.useState)(() => []);
    const [availableInstallTypes, setAvailableInstallTypes] = (0, react_1.useState)(() => []);
    const [availableConnections, setAvailableConnections] = (0, react_1.useState)(() => []);
    const [availableInstallations, setAvailableInstallations] = (0, react_1.useState)(() => []);
    const [states, setStates] = (0, react_1.useState)({
        status: use_wallet_1.WalletStatus.INITIALIZING,
        network: defaultNetwork,
    });
    (0, react_1.useEffect)(() => {
        const availableConnectTypesSubscription = controller
            .availableConnectTypes()
            .subscribe({
            next: (value) => {
                setAvailableConnectTypes(value);
            },
        });
        const availableInstallTypesSubscription = controller
            .availableInstallTypes()
            .subscribe({
            next: (value) => {
                setAvailableInstallTypes(value);
            },
        });
        const availableConnectionsSubscription = controller
            .availableConnections()
            .subscribe({
            next: (value) => {
                setAvailableConnections(value);
            },
        });
        const availableInstallationsSubscription = controller
            .availableInstallations()
            .subscribe({
            next: (value) => {
                setAvailableInstallations(value);
            },
        });
        const statesSubscription = controller.states().subscribe({
            next: (value) => {
                setStates(value);
            },
        });
        return () => {
            availableConnectTypesSubscription.unsubscribe();
            availableInstallTypesSubscription.unsubscribe();
            availableConnectionsSubscription.unsubscribe();
            availableInstallationsSubscription.unsubscribe();
            statesSubscription.unsubscribe();
        };
    }, [controller]);
    const state = (0, react_1.useMemo)(() => {
        return {
            availableConnectTypes,
            availableInstallTypes,
            availableConnections,
            availableInstallations,
            status: states.status,
            network: states.network,
            wallets: states.status === use_wallet_1.WalletStatus.WALLET_CONNECTED
                ? states.wallets
                : EMPTY_ARRAY,
            install: controller.install,
            connect: controller.connect,
            connectReadonly: controller.connectReadonly,
            disconnect: controller.disconnect,
            connection: states.status === use_wallet_1.WalletStatus.WALLET_CONNECTED
                ? states.connection
                : undefined,
            supportFeatures: states.status === use_wallet_1.WalletStatus.WALLET_CONNECTED
                ? states.supportFeatures
                : EMPTY_SUPPORT_FEATURES,
            post: controller.post,
            sign: controller.sign,
            signBytes: controller.signBytes,
            hasCW20Tokens: controller.hasCW20Tokens,
            addCW20Tokens: controller.addCW20Tokens,
            hasNetwork: controller.hasNetwork,
            addNetwork: controller.addNetwork,
            refetchStates: controller.refetchStates,
            recheckStatus: controller.refetchStates,
            isChromeExtensionCompatibleBrowser: controller.isChromeExtensionCompatibleBrowser,
        };
    }, [
        availableConnectTypes,
        availableInstallTypes,
        availableConnections,
        availableInstallations,
        controller,
        states,
    ]);
    return (react_1.default.createElement(use_wallet_1.WalletContext.Provider, { value: state }, children));
}
exports.WalletProvider = WalletProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0UHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQHRlcnJhLW1vbmV5L3dhbGxldC1wcm92aWRlci9XYWxsZXRQcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3REFTaUM7QUFDakMsc0VBR3dDO0FBQ3hDLCtDQUF1RTtBQU12RSxNQUFNLFdBQVcsR0FBaUIsRUFBRSxDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7QUFFcEUsU0FBZ0IsY0FBYyxDQUFDLEVBQzdCLFFBQVEsRUFDUixjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLGFBQWEsRUFDYixjQUFjLEVBQ2QsMkJBQTJCLEVBQzNCLGVBQWUsRUFDZixrQ0FBa0MsRUFDbEMsa0RBQWtELEVBQ2xELE9BQU8sR0FDYTtJQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUMzQixHQUFHLEVBQUUsQ0FDSCxJQUFJLG9DQUFnQixDQUFDO1FBQ25CLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLGtDQUFrQztRQUNsQyxrREFBa0Q7UUFDbEQsT0FBTztLQUNSLENBQUMsQ0FDTCxDQUFDO0lBRUYsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUVoRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVaLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSx3QkFBd0IsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFFaEUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFWixNQUFNLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBRTlELEdBQUcsRUFBRSxDQUFDLEVB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Q0FBQyxNQUFNLEtBQUsseUJBQVksQ0FBQyxnQkFBZ0I7Z0JBQzdDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZTtnQkFDeEIsQ0FBQyxDQUFDLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7WUFDckIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUztZQUMvQixhQUFhLEVBQUUsVUFBVSxDQUFDLGFBQWE7WUFDdkMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxhQUFhO1lBQ3ZDLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtZQUNqQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxhQUFhO1lBQ3ZDLGFBQWEsRUFBRSxVQUFVLENBQUMsYUFBYTtZQUN2QyxrQ0FBa0MsRUFDaEMsVUFBVSxDQUFDLGtDQUFrQztTQUNoRCxDQUFDO0lBQ0osQ0FBQyxFQUFFO1FBQ0QscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixNQUFNO0tBQ1AsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNMLDhCQUFDLDBCQUFhLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLElBQUcsUUFBUSxDQUEwQixDQUMxRSxDQUFDO0FBQ0osQ0FBQztBQWhKRCx3Q0FnSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXJyYVdlYkV4dGVuc2lvbkZlYXR1cmVzIH0gZnJvbSAnQHRlcnJhLW1vbmV5L3dlYi1leHRlbnNpb24taW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb24sXG4gIENvbm5lY3RUeXBlLFxuICBJbnN0YWxsYXRpb24sXG4gIFdhbGxldCxcbiAgV2FsbGV0Q29udGV4dCxcbiAgV2FsbGV0SW5mbyxcbiAgV2FsbGV0U3RhdGVzLFxuICBXYWxsZXRTdGF0dXMsXG59IGZyb20gJ0B0ZXJyYS1tb25leS91c2Utd2FsbGV0JztcbmltcG9ydCB7XG4gIFdhbGxldENvbnRyb2xsZXIsXG4gIFdhbGxldENvbnRyb2xsZXJPcHRpb25zLFxufSBmcm9tICdAdGVycmEtbW9uZXkvd2FsbGV0LWNvbnRyb2xsZXInO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRQcm92aWRlclByb3BzIGV4dGVuZHMgV2FsbGV0Q29udHJvbGxlck9wdGlvbnMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBFTVBUWV9BUlJBWTogV2FsbGV0SW5mb1tdID0gW107XG5jb25zdCBFTVBUWV9TVVBQT1JUX0ZFQVRVUkVTID0gbmV3IFNldDxUZXJyYVdlYkV4dGVuc2lvbkZlYXR1cmVzPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gV2FsbGV0UHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgZGVmYXVsdE5ldHdvcmssXG4gIHdhbGxldENvbm5lY3RDaGFpbklkcyxcbiAgY29ubmVjdG9yT3B0cyxcbiAgcHVzaFNlcnZlck9wdHMsXG4gIGNyZWF0ZVJlYWRvbmx5V2FsbGV0U2Vzc2lvbixcbiAgc2VsZWN0RXh0ZW5zaW9uLFxuICB3YWl0aW5nQ2hyb21lRXh0ZW5zaW9uSW5zdGFsbENoZWNrLFxuICBkYW5nZXJvdXNseV9fY2hyb21lRXh0ZW5zaW9uQ29tcGF0aWJsZUJyb3dzZXJDaGVjayxcbiAgcGx1Z2lucyxcbn06IFdhbGxldFByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2NvbnRyb2xsZXJdID0gdXNlU3RhdGU8V2FsbGV0Q29udHJvbGxlcj4oXG4gICAgKCkgPT5cbiAgICAgIG5ldyBXYWxsZXRDb250cm9sbGVyKHtcbiAgICAgICAgZGVmYXVsdE5ldHdvcmssXG4gICAgICAgIHdhbGxldENvbm5lY3RDaGFpbklkcyxcbiAgICAgICAgY29ubmVjdG9yT3B0cyxcbiAgICAgICAgcHVzaFNlcnZlck9wdHMsXG4gICAgICAgIGNyZWF0ZVJlYWRvbmx5V2FsbGV0U2Vzc2lvbixcbiAgICAgICAgc2VsZWN0RXh0ZW5zaW9uLFxuICAgICAgICB3YWl0aW5nQ2hyb21lRXh0ZW5zaW9uSW5zdGFsbENoZWNrLFxuICAgICAgICBkYW5nZXJvdXNseV9fY2hyb21lRXh0ZW5zaW9uQ29tcGF0aWJsZUJyb3dzZXJDaGVjayxcbiAgICAgICAgcGx1Z2lucyxcbiAgICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IFthdmFpbGFibGVDb25uZWN0VHlwZXMsIHNldEF2YWlsYWJsZUNvbm5lY3RUeXBlc10gPSB1c2VTdGF0ZTxcbiAgICBDb25uZWN0VHlwZVtdXG4gID4oKCkgPT4gW10pO1xuXG4gIGNvbnN0IFthdmFpbGFibGVJbnN0YWxsVHlwZXMsIHNldEF2YWlsYWJsZUluc3RhbGxUeXBlc10gPSB1c2VTdGF0ZTxcbiAgICBDb25uZWN0VHlwZVtdXG4gID4oKCkgPT4gW10pO1xuXG4gIGNvbnN0IFthdmFpbGFibGVDb25uZWN0aW9ucywgc2V0QXZhaWxhYmxlQ29ubmVjdGlvbnNdID0gdXNlU3RhdGU8XG4gICAgQ29ubmVjdGlvbltdXG4gID4oKCkgPT4gW10pO1xuXG4gIGNvbnN0IFthdmFpbGFibGVJbnN0YWxsYXRpb25zLCBzZXRBdmFpbGFibGVJbnN0YWxsYXRpb25zXSA9IHVzZVN0YXRlPFxuICAgIEluc3RhbGxhdGlvbltdXG4gID4oKCkgPT4gW10pO1xuXG4gIGNvbnN0IFtzdGF0ZXMsIHNldFN0YXRlc10gPSB1c2VTdGF0ZTxXYWxsZXRTdGF0ZXM+KHtcbiAgICBzdGF0dXM6IFdhbGxldFN0YXR1cy5JTklUSUFMSVpJTkcsXG4gICAgbmV0d29yazogZGVmYXVsdE5ldHdvcmssXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ29ubmVjdFR5cGVzU3Vic2NyaXB0aW9uID0gY29udHJvbGxlclxuICAgICAgLmF2YWlsYWJsZUNvbm5lY3RUeXBlcygpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2V0QXZhaWxhYmxlQ29ubmVjdFR5cGVzKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlSW5zdGFsbFR5cGVzU3Vic2NyaXB0aW9uID0gY29udHJvbGxlclxuICAgICAgLmF2YWlsYWJsZUluc3RhbGxUeXBlcygpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2V0QXZhaWxhYmxlSW5zdGFsbFR5cGVzKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlQ29ubmVjdGlvbnNTdWJzY3JpcHRpb24gPSBjb250cm9sbGVyXG4gICAgICAuYXZhaWxhYmxlQ29ubmVjdGlvbnMoKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNldEF2YWlsYWJsZUNvbm5lY3Rpb25zKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlSW5zdGFsbGF0aW9uc1N1YnNjcmlwdGlvbiA9IGNvbnRyb2xsZXJcbiAgICAgIC5hdmFpbGFibGVJbnN0YWxsYXRpb25zKClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBzZXRBdmFpbGFibGVJbnN0YWxsYXRpb25zKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhdGVzU3Vic2NyaXB0aW9uID0gY29udHJvbGxlci5zdGF0ZXMoKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldFN0YXRlcyh2YWx1ZSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGF2YWlsYWJsZUNvbm5lY3RUeXBlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgYXZhaWxhYmxlSW5zdGFsbFR5cGVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBhdmFpbGFibGVDb25uZWN0aW9uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgYXZhaWxhYmxlSW5zdGFsbGF0aW9uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgc3RhdGVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2NvbnRyb2xsZXJdKTtcblxuICBjb25zdCBzdGF0ZSA9IHVzZU1lbW88V2FsbGV0PigoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF2YWlsYWJsZUNvbm5lY3RUeXBlcyxcbiAgICAgIGF2YWlsYWJsZUluc3RhbGxUeXBlcyxcbiAgICAgIGF2YWlsYWJsZUNvbm5lY3Rpb25zLFxuICAgICAgYXZhaWxhYmxlSW5zdGFsbGF0aW9ucyxcbiAgICAgIHN0YXR1czogc3RhdGVzLnN0YXR1cyxcbiAgICAgIG5ldHdvcms6IHN0YXRlcy5uZXR3b3JrLFxuICAgICAgd2FsbGV0czpcbiAgICAgICAgc3RhdGVzLnN0YXR1cyA9PT0gV2FsbGV0U3RhdHVzLldBTExFVF9DT05ORUNURURcbiAgICAgICAgICA/IHN0YXRlcy53YWxsZXRzXG4gICAgICAgICAgOiBFTVBUWV9BUlJBWSxcbiAgICAgIGluc3RhbGw6IGNvbnRyb2xsZXIuaW5zdGFsbCxcbiAgICAgIGNvbm5lY3Q6IGNvbnRyb2xsZXIuY29ubmVjdCxcbiAgICAgIGNvbm5lY3RSZWFkb25seTogY29udHJvbGxlci5jb25uZWN0UmVhZG9ubHksXG4gICAgICBkaXNjb25uZWN0OiBjb250cm9sbGVyLmRpc2Nvbm5lY3QsXG4gICAgICBjb25uZWN0aW9uOlxuICAgICAgICBzdGF0ZXMuc3RhdHVzID09PSBXYWxsZXRTdGF0dXMuV0FMTEVUX0NPTk5FQ1RFRFxuICAgICAgICAgID8gc3RhdGVzLmNvbm5lY3Rpb25cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHN1cHBvcnRGZWF0dXJlczpcbiAgICAgICAgc3RhdGVzLnN0YXR1cyA9PT0gV2FsbGV0U3RhdHVzLldBTExFVF9DT05ORUNURURcbiAgICAgICAgICA/IHN0YXRlcy5zdXBwb3J0RmVhdHVyZXNcbiAgICAgICAgICA6IEVNUFRZX1NVUFBPUlRfRkVBVFVSRVMsXG4gICAgICBwb3N0OiBjb250cm9sbGVyLnBvc3QsXG4gICAgICBzaWduOiBjb250cm9sbGVyLnNpZ24sXG4gICAgICBzaWduQnl0ZXM6IGNvbnRyb2xsZXIuc2lnbkJ5dGVzLFxuICAgICAgaGFzQ1cyMFRva2VuczogY29udHJvbGxlci5oYXNDVzIwVG9rZW5zLFxuICAgICAgYWRkQ1cyMFRva2VuczogY29udHJvbGxlci5hZGRDVzIwVG9rZW5zLFxuICAgICAgaGFzTmV0d29yazogY29udHJvbGxlci5oYXNOZXR3b3JrLFxuICAgICAgYWRkTmV0d29yazogY29udHJvbGxlci5hZGROZXR3b3JrLFxuICAgICAgcmVmZXRjaFN0YXRlczogY29udHJvbGxlci5yZWZldGNoU3RhdGVzLFxuICAgICAgcmVjaGVja1N0YXR1czogY29udHJvbGxlci5yZWZldGNoU3RhdGVzLFxuICAgICAgaXNDaHJvbWVFeHRlbnNpb25Db21wYXRpYmxlQnJvd3NlcjpcbiAgICAgICAgY29udHJvbGxlci5pc0Nocm9tZUV4dGVuc2lvbkNvbXBhdGlibGVCcm93c2VyLFxuICAgIH07XG4gIH0sIFtcbiAgICBhdmFpbGFibGVDb25uZWN0VHlwZXMsXG4gICAgYXZhaWxhYmxlSW5zdGFsbFR5cGVzLFxuICAgIGF2YWlsYWJsZUNvbm5lY3Rpb25zLFxuICAgIGF2YWlsYWJsZUluc3RhbGxhdGlvbnMsXG4gICAgY29udHJvbGxlcixcbiAgICBzdGF0ZXMsXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdhbGxldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9XYWxsZXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl19