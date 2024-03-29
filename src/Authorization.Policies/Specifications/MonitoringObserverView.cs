﻿using Vote.Monitor.Domain.Entities.ElectionRoundAggregate;

namespace Authorization.Policies.Specifications;

internal class MonitoringObserverView
{
    public required Guid ElectionRoundId { get; set; }
    public required ElectionRoundStatus ElectionRoundStatus { get; set; }
    public required Guid NgoId { get; set; }
    public required NgoStatus NgoStatus { get; set; }
    public required Guid MonitoringNgoId { get; set; }
    public required MonitoringNgoStatus MonitoringNgoStatus { get; set; }
    public required Guid ObserverId { get; set; }
    public required UserStatus UserStatus { get; set; }
    public required Guid MonitoringObserverId { get; set; }
    public required MonitoringObserverStatus MonitoringObserverStatus { get; set; }
}
