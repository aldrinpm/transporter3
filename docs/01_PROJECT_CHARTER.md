# 01 — Project Charter

## 1. Product name
**Transporter**

## 2. Product vision
Deliver a trustworthy, polished, mobile-first service that lets a customer book a qualified driver to drive the customer's own car or other vehicle between chosen locations. Customers can specify pickup and destination, select a date and time, review a transparent PHP estimate, and receive booking-status and arrival-time updates after a driver accepts.

## 3. Product principles
1. **Trust before novelty:** clear driver identity, status, arrival estimates, and pricing.
2. **Operational correctness:** booking state transitions must be explicit and auditable.
3. **Progressive disclosure:** simple booking flow; advanced details appear only when relevant.
4. **Accessible motion:** animations are subtle, performant, and respect reduced-motion preferences.
5. **Responsive by default:** support small phones, tablets, laptops, and desktop screens.
6. **Secure by default:** least privilege, private customer/driver data, server-side authorization.
7. **Evidence over claims:** never display a live ETA, accepted booking, payment result, or route result unless backed by real system state.
8. **Maintainable delivery:** small increments, automated tests, documented decisions, no speculative abstractions.

## 4. Target users
- **Customer:** books a driver for their own vehicle.
- **Driver:** receives eligible booking requests and accepts or declines them.
- **Operations/admin (recommended):** reviews drivers, handles disputes and support, manages service configuration, and monitors bookings.

## 5. Primary user journeys
### Customer
1. Open landing page without mandatory login for browsing.
2. Enter pickup and destination using map-backed address search.
3. Confirm route and waypoints on an embedded map.
4. Choose booking date/time and provide required vehicle/service details.
5. Review estimate in Philippine Peso, pricing assumptions, and terms.
6. Submit booking and receive a reference/status.
7. Wait for driver acceptance; receive notification when accepted.
8. See assigned driver details and estimated arrival time to pickup.
9. Track status changes and cancel if allowed.
10. Complete service and submit rating/feedback (future milestone).

### Driver
1. Sign in securely and complete profile/onboarding.
2. Set availability and service area.
3. View eligible booking requests.
4. Review pickup, destination, scheduled time, estimated duration/distance, and payout/compensation.
5. Accept or decline according to dispatch rules.
6. After acceptance, navigate to pickup and update trip/arrival status.
7. Complete booking and report incidents if needed.

### Operations
1. Review driver verification/onboarding status.
2. Inspect booking history and state transitions.
3. Resolve cancellations, safety issues, pricing disputes, and failed notifications.
4. Manage service availability and pricing configuration.

## 6. Scope boundaries
### Initial release (MVP)
- Responsive public landing page.
- Customer booking flow with pickup/destination, optional intermediate waypoints if product confirms, scheduled date/time, vehicle/service details, and PHP estimate.
- Map route visualization and route summary.
- Driver authentication and booking acceptance.
- Customer-facing status and ETA after acceptance.
- Booking notifications using an agreed channel.
- Admin/operations minimum viable controls.
- Tests, observability, security baseline, and Obsidian project memory.

### Explicitly not assumed for MVP
- Native iOS/Android apps.
- Automatic dynamic pricing or surge pricing.
- In-app wallet, complex escrow, or multi-provider payments.
- Real-time driver GPS tracking before consent, permission, and operational/legal requirements are resolved.
- AI-generated driver decisions or opaque automated risk scoring.
- Guaranteed exact arrival time.
- Multi-city rollout before one service area is validated.

## 7. Success metrics
Instrument, then set targets after baseline data exists:
- Booking funnel completion rate.
- Median time to create a booking.
- Driver acceptance rate and time-to-accept.
- ETA error (predicted vs. actual arrival).
- Cancellation rate by actor and reason.
- Notification delivery success.
- Booking support contacts per 100 bookings.
- Web Core Web Vitals and accessibility audit results.
