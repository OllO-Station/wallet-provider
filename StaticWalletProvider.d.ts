import { TerraWebExtensionFeatures } from '@nestwallet/web-extension-interface';
import { Connection, ConnectType, Installation, NetworkInfo, WalletInfo, WalletStatus } from '@nestwallet/use-wallet';
import { ReactNode } from 'react';
export interface StaticWalletProviderProps {
    children: ReactNode;
    defaultNetwork: NetworkInfo;
    status?: WalletStatus;
    availableConnectTypes?: ConnectType[];
    availableInstallTypes?: ConnectType[];
    availableConnections?: Connection[];
    availableInstallations?: Installation[];
    wallets?: WalletInfo[];
    supportFeatures?: Set<TerraWebExtensionFeatures>;
    connection?: Connection | undefined;
}
export declare function StaticWalletProvider({ children, defaultNetwork, status, availableConnectTypes, availableInstallTypes, availableConnections, availableInstallations, wallets, supportFeatures, connection, }: StaticWalletProviderProps): JSX.Element;
