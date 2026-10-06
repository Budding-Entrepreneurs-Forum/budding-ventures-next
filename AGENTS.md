# Architecture rules

- The Members legacy section reuses the existing year-tab implementation and shared MemberCard with optional unclamped, flow-based text; this preserves current cards while keeping historical names and roles fully readable.
- Current Core Committee uses a separate ordered delegation module and an opt-in fixed-proportion mode on MemberCard; this isolates updates from historical records and other pages.