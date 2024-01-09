<script>
  import {
    Header,
    HeaderUtilities,
    HeaderAction,
    HeaderGlobalAction,
    HeaderPanelLinks,
    HeaderPanelDivider,
    HeaderPanelLink,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SkipToContent,
    Content,
  } from "carbon-components-svelte";
  import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";

  let isSideNavOpen = false;
  let isAppSwitcherOpen = false;
  let isSettingsOpen = false;
</script>

<Header company="ddcalc.net" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <!-- <HeaderUtilities>
    <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} />
    <HeaderAction bind:isOpen={isSettingsOpen}>
      <HeaderPanelLinks>
        <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
        <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
        <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
        <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
        <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
        <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
        <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
        <HeaderPanelLink>Switcher item 5</HeaderPanelLink>
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities> -->
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href="/" text="DD Calculator" />
    <!-- <SideNavLink href="/builder" text="Routine Builder" />
    <SideNavLink href="/routinegame" text="Routine Game" /> -->
    <!-- <SideNavLink text="Routine Builder" />
    <SideNavLink text="Routine Game" />
    <SideNavLink href="/library" text="Video Library" />
    <SideNavLink href="/related" text="Related Skill" /> -->
    <!-- TODO: remove this when UI is decided, decide on whether to nest or not -->
    <!-- <SideNavMenu text="Menu">
      <SideNavMenuItem href="/" text="Link 1" />
      <SideNavMenuItem href="/" text="Link 2" />
      <SideNavMenuItem href="/" text="Link 3" />
    </SideNavMenu> -->
    <SideNavLink text="Skill filter search" href="/filterSearch" />
    <!-- <SideNavLink text="Tracking table" /> -->
    <SideNavLink href="/about" text="About" />
  </SideNavItems>
</SideNav>

<Content>
  <slot />
</Content>
