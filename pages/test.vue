<script setup>
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";

import { mainnet, arbitrum } from "viem/chains";
import { reconnect } from "@wagmi/core";

// 1. Define constants
const projectId = "YOUR_PROJECT_ID";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

reconnect(config);
// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});
</script>

<template>
  <div>
    test page
    <w3m-button />
  </div>
</template>
