import { router } from "expo-router";
import { Screen } from "../../components/Screen";
import Header from "../../components/Header";
import { Icon } from "../../components/Icon";
import { TextStyle, ViewStyle } from "react-native";
import { XStack, YStack } from "tamagui";
import { Typography } from "../../components/Typography";
import Select from "../../components/Select";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { usePollingStationByParentID } from "../../services/queries.service";
import { useMemo, useState } from "react";
import { PollingStationNomenclatorNodeVM } from "../../common/models/polling-station.model";

const mapPollingStationOptionsToSelectValues = (
  options: PollingStationNomenclatorNodeVM[],
): { id: string | number; value: string; label: string }[] => {
  return options.map((option) => ({
    id: option.id,
    value: `${option.id}_${option.name}`,
    label: option.name,
  }));
};

type PollingStationStep = {
  id: number;
  name: string | null;
};

const PollingStationWizzard = () => {
  const [steps, setSteps] = useState<PollingStationStep[]>([]);

  const onNextPress = (nextStep: PollingStationStep) => {
    setSteps([...steps, nextStep]);
  };

  const onPreviousPress = () => {
    setSteps(steps.slice(0, steps.length - 1));
  };

  const activeStep = useMemo(() => [...steps].pop(), [steps]);

  const locations = useMemo(() => steps.map((step) => step.name).join(", "), [steps]);

  return (
    <Screen style={$screenStyle} contentContainerStyle={$containerStyle} preset="fixed">
      <Header
        title={"Add polling station"}
        leftIcon={<Icon icon="chevronLeft" color="white" />}
        onLeftPress={router.back}
      />
      <PollingStationWizzardContent
        activeStep={activeStep}
        onPreviousPress={onPreviousPress}
        onNextPress={onNextPress}
        locations={locations}
      />
    </Screen>
  );
};

interface PollingStationWizzardContentProps {
  onPreviousPress: () => void;
  onNextPress: (nextStep: PollingStationStep) => void;
  activeStep?: PollingStationStep;
  locations: string;
}

const PollingStationWizzardContent = ({
  onPreviousPress,
  onNextPress,
  activeStep,
  locations,
}: PollingStationWizzardContentProps) => {
  const insets = useSafeAreaInsets();
  const [selectedOption, setSelectedOption] = useState<{ id: number; name: string }>();

  // Call polling station
  const { data: pollingStationOptions } = usePollingStationByParentID(
    activeStep?.id ? +activeStep.id.toFixed(1) : -1,
  );

  console.log("activeStep", activeStep);
  console.log("pollingStationOptions", pollingStationOptions.length);

  const pollingStationsMappedOptions = useMemo(
    () => mapPollingStationOptionsToSelectValues(pollingStationOptions),
    [pollingStationOptions],
  );

  const isLastElement: boolean = useMemo(
    () => !!pollingStationOptions[0]?.pollingStationId,
    [pollingStationOptions],
  );

  const onSelectOption = (option: string) => {
    const [id, value] = option.split("_");
    setSelectedOption({
      id: +id,
      name: value,
    });
  };

  const onNextButtonPress = () => {
    if (selectedOption) {
      onNextPress(selectedOption);
      setSelectedOption(undefined);
    }
  };

  const onBackButtonPress = () => {
    onPreviousPress();
    setSelectedOption(undefined);
  };

  const onFinishButtonPress = () => {
    console.log("on finish button press");
  };

  return (
    <YStack style={$containerStyle} justifyContent="space-between">
      <YStack paddingHorizontal="$md" paddingTop="$xl">
        <YStack gap="$md" minHeight="$xl">
          {activeStep && (
            <Typography color="$gray5">{`Add polling station from the ${locations}`}</Typography>
          )}
        </YStack>
        <YStack paddingTop={140} gap="$lg" justifyContent="center">
          <Typography preset="body2" style={$labelStyle}>
            Select the [Location - L1] of the polling station
          </Typography>
          <Select
            key={activeStep?.id || "-1"}
            options={pollingStationsMappedOptions}
            placeholder="Select Region"
            onValueChange={onSelectOption}
          />
        </YStack>
      </YStack>
      <XStack
        elevation={2}
        backgroundColor="white"
        gap="$sm"
        padding="$md"
        paddingBottom={insets.bottom}
      >
        {activeStep?.id && (
          <XStack flex={0.25}>
            <Button
              width="100%"
              icon={() => <Icon icon="chevronLeft" color="$purple5" />}
              preset="chromeless"
              onPress={onBackButtonPress}
            >
              Back
            </Button>
          </XStack>
        )}
        <XStack flex={!activeStep?.id ? 1 : 0.75}>
          {!isLastElement && (
            <Button disabled={!selectedOption} width="100%" onPress={onNextButtonPress}>
              Next Step
            </Button>
          )}
          {isLastElement && (
            <Button width="100%" onPress={onFinishButtonPress}>
              Finalize
            </Button>
          )}
        </XStack>
      </XStack>
    </YStack>
  );
};

const $screenStyle: ViewStyle = {
  backgroundColor: "white",
  justifyContent: "space-between",
};

const $containerStyle: ViewStyle = {
  flex: 1,
};

const $labelStyle: TextStyle = {
  color: "black",
  fontWeight: "700",
};

export default PollingStationWizzard;
