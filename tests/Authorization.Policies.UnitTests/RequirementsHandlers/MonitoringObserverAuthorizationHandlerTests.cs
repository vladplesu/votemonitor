﻿using Authorization.Policies.RequirementHandlers;
using Vote.Monitor.Domain.Entities.MonitoringObserverAggregate;

namespace Authorization.Policies.UnitTests.RequirementsHandlers;

public class MonitoringObserverAuthorizationHandlerTests
{
    private readonly ICurrentUserProvider _currentUserProvider = Substitute.For<ICurrentUserProvider>();
    private readonly IReadRepository<MonitoringObserver> _monitoringObserverRepository = Substitute.For<IReadRepository<MonitoringObserver>>();

    private readonly Guid _electionRoundId = Guid.NewGuid();
    private readonly Guid _observerId = Guid.NewGuid();

    private readonly AuthorizationHandlerContext _context;

    public MonitoringObserverAuthorizationHandlerTests()
    {
        var requirement = new MonitoringObserverRequirement(_electionRoundId);
        _context = new AuthorizationHandlerContext([requirement], null, null);
    }

    [Fact]
    public async Task HandleRequirementAsync_UserIsNotObserver_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(false);
        _currentUserProvider.GetUserId().Returns(_observerId);

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }

    [Fact]
    public async Task HandleRequirementAsync_MonitoringObserverNotFound_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .ReturnsNull();

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }

    [Fact]
    public async Task HandleRequirementAsync_ElectionRoundIsArchived_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .Returns(CreateMonitoringObserverView.With().ArchivedElectionRound());

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }    
    
    [Fact]
    public async Task HandleRequirementAsync_NgoIsDeactivated_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .Returns(CreateMonitoringObserverView.With().DeactivatedNgo());

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }

    [Fact]
    public async Task HandleRequirementAsync_MonitoringNgoIsSuspended_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .Returns(CreateMonitoringObserverView.With().SuspendedMonitoringNgo());

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }

    [Fact]
    public async Task HandleRequirementAsync_UserIsDeactivated_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .Returns(CreateMonitoringObserverView.With().DeactivatedObserver());

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }

    [Fact]
    public async Task HandleRequirementAsync_MonitoringObserverIsSuspended_Failure()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .Returns(CreateMonitoringObserverView.With().SuspendedMonitoringObserver());

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeFalse();
    }

    [Fact]
    public async Task HandleRequirementAsync_ValidMonitoringObserver_Success()
    {
        // Arrange
        _currentUserProvider.IsObserver().Returns(true);
        _currentUserProvider.GetUserId().Returns(_observerId);

        _monitoringObserverRepository
            .FirstOrDefaultAsync(Arg.Any<GetMonitoringObserverSpecification>())
            .Returns(CreateMonitoringObserverView.ForValidAccess());

        var handler = new MonitoringObserverAuthorizationHandler(_currentUserProvider, _monitoringObserverRepository);

        // Act
        await handler.HandleAsync(_context);

        // Assert
        _context.HasSucceeded.Should().BeTrue();
    }
}
