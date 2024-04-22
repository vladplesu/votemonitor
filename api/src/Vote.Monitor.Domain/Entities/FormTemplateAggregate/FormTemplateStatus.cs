﻿using System.Text.Json.Serialization;
using Ardalis.SmartEnum;

namespace Vote.Monitor.Domain.Entities.FormTemplateAggregate;

public sealed class FormTemplateStatus : SmartEnum<FormTemplateStatus, string>
{
    public static readonly FormTemplateStatus Drafted = new(nameof(Drafted), nameof(Drafted));
    public static readonly FormTemplateStatus Published = new(nameof(Published), nameof(Published));

    /// <summary>Gets an item associated with the specified value. Parses SmartEnum when used as query params</summary>
    /// <see href="https://github.com/ardalis/SmartEnum/issues/410#issuecomment-1686057067">this issue</see>
    /// <param name="value">The value of the item to get.</param>
    /// <param name="result">
    /// When this method returns, contains the item associated with the specified value, if the value is found;
    /// otherwise, <c>null</c>. This parameter is passed uninitialized.</param>
    /// <returns>
    /// <c>true</c> if the <see cref="FormTemplateStatus" /> contains an item with the specified name; otherwise, <c>false</c>.
    /// </returns>
    public static bool TryParse(string value, out FormTemplateStatus result)
    {
        return TryFromValue(value, out result);
    }

    [JsonConstructor]
    private FormTemplateStatus(string name, string value) : base(name, value)
    {
    }
}
