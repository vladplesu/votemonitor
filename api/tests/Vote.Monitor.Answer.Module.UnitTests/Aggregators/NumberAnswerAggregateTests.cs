﻿using FluentAssertions;
using Vote.Monitor.Answer.Module.Aggregators;
using Vote.Monitor.Domain.Entities.FormAnswerBase.Answers;
using Vote.Monitor.Domain.Entities.FormBase.Questions;
using Vote.Monitor.Domain.Entities.FormSubmissionAggregate;
using Vote.Monitor.TestUtils.Fakes.Aggregates;
using Vote.Monitor.TestUtils.Fakes.Aggregates.Questions;
using Xunit;

namespace Vote.Monitor.Answer.Module.UnitTests.Aggregators;

public class NumberAnswerAggregateTests
{
    private readonly FormSubmission _submission = new FormSubmissionFaker().Generate();
    private readonly NumberQuestion _question = new NumberQuestionFaker().Generate();
    private readonly NumberAnswerAggregate _aggregate;

    public NumberAnswerAggregateTests()
    {
        _aggregate = new NumberAnswerAggregate(_question, 0);
    }

    [Fact]
    public void Aggregate_ShouldUpdateMin()
    {
        // Arrange
        var answer1 = NumberAnswer.Create(_question.Id, 10);
        var answer2 = NumberAnswer.Create(_question.Id, 5);

        // Act
        _aggregate.Aggregate(_submission, answer1);
        _aggregate.Aggregate(_submission, answer2);

        // Assert
        _aggregate.Min.Should().Be(5);
    }

    [Fact]
    public void Aggregate_ShouldUpdateMax()
    {
        // Arrange
        var answer1 = NumberAnswer.Create(_question.Id, 10);
        var answer2 = NumberAnswer.Create(_question.Id, 15);

        // Act
        _aggregate.Aggregate(_submission, answer1);
        _aggregate.Aggregate(_submission, answer2);

        // Assert
        _aggregate.Max.Should().Be(15);
    }

    [Fact]
    public void Aggregate_ShouldUpdateAverage()
    {
        // Arrange
        var answer1 = NumberAnswer.Create(_question.Id, 10);
        var answer2 = NumberAnswer.Create(_question.Id, 20);

        // Act
        _aggregate.Aggregate(_submission, answer1);
        _aggregate.Aggregate(_submission, answer2);

        // Assert
        _aggregate.Average.Should().Be(15);
    }

    [Fact]
    public void Aggregate_ShouldThrowException_WhenInvalidAnswerReceived()
    {
        // Arrange
        var answer = new TestAnswer(); // Not a NumberAnswer

        // Act & Assert
        _aggregate.Invoking(a => a.Aggregate(_submission, answer))
            .Should().Throw<ArgumentException>()
            .WithMessage($"Invalid answer received: {answer.Discriminator} (Parameter 'answer')");
    }
}
