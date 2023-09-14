import { WalletContext, WalletStatus, } from '@terra-money/use-wallet';
import { WalletController, } from '@terra-money/wallet-controller';
import React, { useEffect, useMemo, useState } from 'react';
const EMPTY_ARRAY = [];
const EMPTY_SUPPORT_FEATURES = new Set();
export function WalletProvider({ children, defaultNetwork, walletConnectChainIds, connectorOpts, pushServerOpts, createReadonlyWalletSession, selectExtension, waitingChromeExtensionInstallCheck, dangerously__chromeExtensionCompatibleBrowserCheck, plugins, }) {
    const [controller] = useState(() => new WalletController({
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
    const [availableConnectTypes, setAvailableConnectTypes] = useState(() => []);
    const [availableInstallTypes, setAvailableInstallTypes] = useState(() => []);
    const [availableConnections, setAvailableConnections] = useState(() => []);
    const [availableInstallations, setAvailableInstallations] = useState(() => []);
    const [states, setStates] = useState({
        status: WalletStatus.INITIALIZING,
        network: defaultNetwork,
    });
    useEffect(() => {
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
    const state = useMemo(() => {
        return {
            availableConnectTypes,
            availableInstallTypes,
            availableConnections,
            availableInstallations,
            status: states.status,
            network: states.network,
            wallets: states.status === WalletStatus.WALLET_CONNECTED
                ? states.wallets
                : EMPTY_ARRAY,
            install: controller.install,
            connect: controller.connect,
            connectReadonly: controller.connectReadonly,
            disconnect: controller.disconnect,
            connection: states.status === WalletStatus.WALLET_CONNECTED
                ? states.connection
                : undefined,
            supportFeatures: states.status === WalletStatus.WALLET_CONNECTED
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
    return (React.createElement(WalletContext.Provider, { value: state }, children));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0UHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQHRlcnJhLW1vbmV5L3dhbGxldC1wcm92aWRlci9XYWxsZXRQcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUtMLGFBQWEsRUFHYixZQUFZLEdBQ2IsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsZ0JBQWdCLEdBRWpCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxLQUFLLEVBQUUsRUFBYSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQU12RSxNQUFNLFdBQVcsR0FBaUIsRUFBRSxDQUFDO0FBQ3JDLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7QUFFcEUsTUFBTSxVQUFVLGNBQWMsQ0FBQyxFQUM3QixRQUFRLEVBQ1IsY0FBYyxFQUNkLHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsY0FBYyxFQUNkLDJCQUEyQixFQUMzQixlQUFlLEVBQ2Ysa0NBQWtDLEVBQ2xDLGtEQUFrRCxFQUNsRCxPQUFPLEdBQ2E7SUFDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FDM0IsR0FBRyxFQUFFLENBQ0gsSUFBSSxnQkFBZ0IsQ0FBQztRQUNuQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixjQUFjO1FBQ2QsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsa0RBQWtEO1FBQ2xELE9BQU87S0FDUixDQUFDLENBQ0wsQ0FBQztJQUVGLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSx3QkFBd0IsQ0FBQyxHQUFHLFFBQVEsQ0FFaEUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFWixNQUFNLENBQUMscUJBQXFCLEVBQUUsd0JBQXdCLENBQUMsR0FBRyxRQUFRLENBRWhFLEdBQUcsRUFBRSxDQUFDLEVBQUUs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QUFNLENBQUMsVUFBVTtnQkFDbkIsQ0FBQyxDQUFDLFNBQVM7WUFDZixlQUFlLEVBQ2IsTUFBTSxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsZ0JBQWdCO2dCQUM3QyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWU7Z0JBQ3hCLENBQUMsQ0FBQyxzQkFBc0I7WUFDNUIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNyQixTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVM7WUFDL0IsYUFBYSxFQUFFLFVBQVUsQ0FBQyxhQUFhO1lBQ3ZDLGFBQWEsRUFBRSxVQUFVLENBQUMsYUFBYTtZQUN2QyxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQ2pDLGFBQWEsRUFBRSxVQUFVLENBQUMsYUFBYTtZQUN2QyxhQUFhLEVBQUUsVUFBVSxDQUFDLGFBQWE7WUFDdkMsa0NBQWtDLEVBQ2hDLFVBQVUsQ0FBQyxrQ0FBa0M7U0FDaEQsQ0FBQztJQUNKLENBQUMsRUFBRTtRQUNELHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsTUFBTTtLQUNQLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FDTCxvQkFBQyxhQUFhLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxLQUFLLElBQUcsUUFBUSxDQUEwQixDQUMxRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlcnJhV2ViRXh0ZW5zaW9uRmVhdHVyZXMgfSBmcm9tICdAdGVycmEtbW9uZXkvd2ViLWV4dGVuc2lvbi1pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvbixcbiAgQ29ubmVjdFR5cGUsXG4gIEluc3RhbGxhdGlvbixcbiAgV2FsbGV0LFxuICBXYWxsZXRDb250ZXh0LFxuICBXYWxsZXRJbmZvLFxuICBXYWxsZXRTdGF0ZXMsXG4gIFdhbGxldFN0YXR1cyxcbn0gZnJvbSAnQHRlcnJhLW1vbmV5L3VzZS13YWxsZXQnO1xuaW1wb3J0IHtcbiAgV2FsbGV0Q29udHJvbGxlcixcbiAgV2FsbGV0Q29udHJvbGxlck9wdGlvbnMsXG59IGZyb20gJ0B0ZXJyYS1tb25leS93YWxsZXQtY29udHJvbGxlcic7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhbGxldFByb3ZpZGVyUHJvcHMgZXh0ZW5kcyBXYWxsZXRDb250cm9sbGVyT3B0aW9ucyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IEVNUFRZX0FSUkFZOiBXYWxsZXRJbmZvW10gPSBbXTtcbmNvbnN0IEVNUFRZX1NVUFBPUlRfRkVBVFVSRVMgPSBuZXcgU2V0PFRlcnJhV2ViRXh0ZW5zaW9uRmVhdHVyZXM+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBXYWxsZXRQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxuICBkZWZhdWx0TmV0d29yayxcbiAgd2FsbGV0Q29ubmVjdENoYWluSWRzLFxuICBjb25uZWN0b3JPcHRzLFxuICBwdXNoU2VydmVyT3B0cyxcbiAgY3JlYXRlUmVhZG9ubHlXYWxsZXRTZXNzaW9uLFxuICBzZWxlY3RFeHRlbnNpb24sXG4gIHdhaXRpbmdDaHJvbWVFeHRlbnNpb25JbnN0YWxsQ2hlY2ssXG4gIGRhbmdlcm91c2x5X19jaHJvbWVFeHRlbnNpb25Db21wYXRpYmxlQnJvd3NlckNoZWNrLFxuICBwbHVnaW5zLFxufTogV2FsbGV0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbY29udHJvbGxlcl0gPSB1c2VTdGF0ZTxXYWxsZXRDb250cm9sbGVyPihcbiAgICAoKSA9PlxuICAgICAgbmV3IFdhbGxldENvbnRyb2xsZXIoe1xuICAgICAgICBkZWZhdWx0TmV0d29yayxcbiAgICAgICAgd2FsbGV0Q29ubmVjdENoYWluSWRzLFxuICAgICAgICBjb25uZWN0b3JPcHRzLFxuICAgICAgICBwdXNoU2VydmVyT3B0cyxcbiAgICAgICAgY3JlYXRlUmVhZG9ubHlXYWxsZXRTZXNzaW9uLFxuICAgICAgICBzZWxlY3RFeHRlbnNpb24sXG4gICAgICAgIHdhaXRpbmdDaHJvbWVFeHRlbnNpb25JbnN0YWxsQ2hlY2ssXG4gICAgICAgIGRhbmdlcm91c2x5X19jaHJvbWVFeHRlbnNpb25Db21wYXRpYmxlQnJvd3NlckNoZWNrLFxuICAgICAgICBwbHVnaW5zLFxuICAgICAgfSksXG4gICk7XG5cbiAgY29uc3QgW2F2YWlsYWJsZUNvbm5lY3RUeXBlcywgc2V0QXZhaWxhYmxlQ29ubmVjdFR5cGVzXSA9IHVzZVN0YXRlPFxuICAgIENvbm5lY3RUeXBlW11cbiAgPigoKSA9PiBbXSk7XG5cbiAgY29uc3QgW2F2YWlsYWJsZUluc3RhbGxUeXBlcywgc2V0QXZhaWxhYmxlSW5zdGFsbFR5cGVzXSA9IHVzZVN0YXRlPFxuICAgIENvbm5lY3RUeXBlW11cbiAgPigoKSA9PiBbXSk7XG5cbiAgY29uc3QgW2F2YWlsYWJsZUNvbm5lY3Rpb25zLCBzZXRBdmFpbGFibGVDb25uZWN0aW9uc10gPSB1c2VTdGF0ZTxcbiAgICBDb25uZWN0aW9uW11cbiAgPigoKSA9PiBbXSk7XG5cbiAgY29uc3QgW2F2YWlsYWJsZUluc3RhbGxhdGlvbnMsIHNldEF2YWlsYWJsZUluc3RhbGxhdGlvbnNdID0gdXNlU3RhdGU8XG4gICAgSW5zdGFsbGF0aW9uW11cbiAgPigoKSA9PiBbXSk7XG5cbiAgY29uc3QgW3N0YXRlcywgc2V0U3RhdGVzXSA9IHVzZVN0YXRlPFdhbGxldFN0YXRlcz4oe1xuICAgIHN0YXR1czogV2FsbGV0U3RhdHVzLklOSVRJQUxJWklORyxcbiAgICBuZXR3b3JrOiBkZWZhdWx0TmV0d29yayxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdmFpbGFibGVDb25uZWN0VHlwZXNTdWJzY3JpcHRpb24gPSBjb250cm9sbGVyXG4gICAgICAuYXZhaWxhYmxlQ29ubmVjdFR5cGVzKClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBzZXRBdmFpbGFibGVDb25uZWN0VHlwZXModmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVJbnN0YWxsVHlwZXNTdWJzY3JpcHRpb24gPSBjb250cm9sbGVyXG4gICAgICAuYXZhaWxhYmxlSW5zdGFsbFR5cGVzKClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBzZXRBdmFpbGFibGVJbnN0YWxsVHlwZXModmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVDb25uZWN0aW9uc1N1YnNjcmlwdGlvbiA9IGNvbnRyb2xsZXJcbiAgICAgIC5hdmFpbGFibGVDb25uZWN0aW9ucygpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2V0QXZhaWxhYmxlQ29ubmVjdGlvbnModmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVJbnN0YWxsYXRpb25zU3Vic2NyaXB0aW9uID0gY29udHJvbGxlclxuICAgICAgLmF2YWlsYWJsZUluc3RhbGxhdGlvbnMoKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNldEF2YWlsYWJsZUluc3RhbGxhdGlvbnModmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBzdGF0ZXNTdWJzY3JpcHRpb24gPSBjb250cm9sbGVyLnN0YXRlcygpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0U3RhdGVzKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXZhaWxhYmxlQ29ubmVjdFR5cGVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBhdmFpbGFibGVJbnN0YWxsVHlwZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIGF2YWlsYWJsZUNvbm5lY3Rpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBhdmFpbGFibGVJbnN0YWxsYXRpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBzdGF0ZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbY29udHJvbGxlcl0pO1xuXG4gIGNvbnN0IHN0YXRlID0gdXNlTWVtbzxXYWxsZXQ+KCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmxlQ29ubmVjdFR5cGVzLFxuICAgICAgYXZhaWxhYmxlSW5zdGFsbFR5cGVzLFxuICAgICAgYXZhaWxhYmxlQ29ubmVjdGlvbnMsXG4gICAgICBhdmFpbGFibGVJbnN0YWxsYXRpb25zLFxuICAgICAgc3RhdHVzOiBzdGF0ZXMuc3RhdHVzLFxuICAgICAgbmV0d29yazogc3RhdGVzLm5ldHdvcmssXG4gICAgICB3YWxsZXRzOlxuICAgICAgICBzdGF0ZXMuc3RhdHVzID09PSBXYWxsZXRTdGF0dXMuV0FMTEVUX0NPTk5FQ1RFRFxuICAgICAgICAgID8gc3RhdGVzLndhbGxldHNcbiAgICAgICAgICA6IEVNUFRZX0FSUkFZLFxuICAgICAgaW5zdGFsbDogY29udHJvbGxlci5pbnN0YWxsLFxuICAgICAgY29ubmVjdDogY29udHJvbGxlci5jb25uZWN0LFxuICAgICAgY29ubmVjdFJlYWRvbmx5OiBjb250cm9sbGVyLmNvbm5lY3RSZWFkb25seSxcbiAgICAgIGRpc2Nvbm5lY3Q6IGNvbnRyb2xsZXIuZGlzY29ubmVjdCxcbiAgICAgIGNvbm5lY3Rpb246XG4gICAgICAgIHN0YXRlcy5zdGF0dXMgPT09IFdhbGxldFN0YXR1cy5XQUxMRVRfQ09OTkVDVEVEXG4gICAgICAgICAgPyBzdGF0ZXMuY29ubmVjdGlvblxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgc3VwcG9ydEZlYXR1cmVzOlxuICAgICAgICBzdGF0ZXMuc3RhdHVzID09PSBXYWxsZXRTdGF0dXMuV0FMTEVUX0NPTk5FQ1RFRFxuICAgICAgICAgID8gc3RhdGVzLnN1cHBvcnRGZWF0dXJlc1xuICAgICAgICAgIDogRU1QVFlfU1VQUE9SVF9GRUFUVVJFUyxcbiAgICAgIHBvc3Q6IGNvbnRyb2xsZXIucG9zdCxcbiAgICAgIHNpZ246IGNvbnRyb2xsZXIuc2lnbixcbiAgICAgIHNpZ25CeXRlczogY29udHJvbGxlci5zaWduQnl0ZXMsXG4gICAgICBoYXNDVzIwVG9rZW5zOiBjb250cm9sbGVyLmhhc0NXMjBUb2tlbnMsXG4gICAgICBhZGRDVzIwVG9rZW5zOiBjb250cm9sbGVyLmFkZENXMjBUb2tlbnMsXG4gICAgICBoYXNOZXR3b3JrOiBjb250cm9sbGVyLmhhc05ldHdvcmssXG4gICAgICBhZGROZXR3b3JrOiBjb250cm9sbGVyLmFkZE5ldHdvcmssXG4gICAgICByZWZldGNoU3RhdGVzOiBjb250cm9sbGVyLnJlZmV0Y2hTdGF0ZXMsXG4gICAgICByZWNoZWNrU3RhdHVzOiBjb250cm9sbGVyLnJlZmV0Y2hTdGF0ZXMsXG4gICAgICBpc0Nocm9tZUV4dGVuc2lvbkNvbXBhdGlibGVCcm93c2VyOlxuICAgICAgICBjb250cm9sbGVyLmlzQ2hyb21lRXh0ZW5zaW9uQ29tcGF0aWJsZUJyb3dzZXIsXG4gICAgfTtcbiAgfSwgW1xuICAgIGF2YWlsYWJsZUNvbm5lY3RUeXBlcyxcbiAgICBhdmFpbGFibGVJbnN0YWxsVHlwZXMsXG4gICAgYXZhaWxhYmxlQ29ubmVjdGlvbnMsXG4gICAgYXZhaWxhYmxlSW5zdGFsbGF0aW9ucyxcbiAgICBjb250cm9sbGVyLFxuICAgIHN0YXRlcyxcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2FsbGV0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L1dhbGxldENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXX0=