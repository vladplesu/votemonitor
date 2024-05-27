﻿using Vote.Monitor.Answer.Module.Aggregators.Extensions;
using Vote.Monitor.Domain.Entities.FormAnswerBase.Answers;
using Vote.Monitor.Domain.Entities.FormBase.Questions;
using Vote.Monitor.Domain.Entities.FormSubmissionAggregate;

namespace Vote.Monitor.Answer.Module.Aggregators;

public class SingleSelectAnswerAggregate : BaseAnswerAggregate
{
    private readonly Dictionary<Guid, int> _answersHistogram;
    public IReadOnlyDictionary<Guid, int> AnswersHistogram => _answersHistogram.AsReadOnly();

    public SingleSelectAnswerAggregate(SingleSelectQuestion question, int displayOrder) : base(question, displayOrder)
    {
        _answersHistogram = question.Options.ToDictionary(o => o.Id, _ => 0);
    }

    protected override void QuestionSpecificAggregate(FormSubmission submission, BaseAnswer answer)
    {
        if (answer is not SingleSelectAnswer singleSelectAnswer)
        {
            throw new ArgumentException($"Invalid answer received: {answer.Discriminator}", nameof(answer));
        }

        _answersHistogram.IncrementFor(singleSelectAnswer.Selection.OptionId);
    }
}
