var group__acmp =
[
    [ "acmp_config_t", "group__acmp.html#structacmp__config__t", [
      [ "offsetMode", "group__acmp.html#aa9cf01cde607eb1b8bc1a1315ad990c0", null ],
      [ "hysteresisMode", "group__acmp.html#a2b2c72e5637e1644fa73c82c29bd8370", null ],
      [ "enableHighSpeed", "group__acmp.html#a490dce695b3daf85e0c53322fec294d0", null ],
      [ "enableInvertOutput", "group__acmp.html#a51e507b19239d73c0aa7045f50632341", null ],
      [ "useUnfilteredOutput", "group__acmp.html#ad3b6395ad9320dd0ecd495a83ddf4734", null ],
      [ "enablePinOut", "group__acmp.html#a9db54c903806a57b189755d56c6d60f7", null ]
    ] ],
    [ "acmp_channel_config_t", "group__acmp.html#structacmp__channel__config__t", [
      [ "positivePortInput", "group__acmp.html#a9c337dfa5fc32d9c57efbd7e567a8e2f", null ],
      [ "plusMuxInput", "group__acmp.html#a3480deb0dfc7c1e52a763d8d7b172847", null ],
      [ "negativePortInput", "group__acmp.html#ad3006796d95290faa4bd142a307085e1", null ],
      [ "minusMuxInput", "group__acmp.html#a47e25c53ffff810bbcd90517b6e5cbc2", null ]
    ] ],
    [ "acmp_filter_config_t", "group__acmp.html#structacmp__filter__config__t", [
      [ "enableSample", "group__acmp.html#a8976a836edc291ae9f224ccfb0380456", null ],
      [ "filterCount", "group__acmp.html#a72763e3572b22aceb221eb9e5ab05f8f", null ],
      [ "filterPeriod", "group__acmp.html#a461e173112f927d662ca11f2cee27711", null ]
    ] ],
    [ "acmp_dac_config_t", "group__acmp.html#structacmp__dac__config__t", [
      [ "referenceVoltageSource", "group__acmp.html#a73470b7b736972106db5945cdf5ef345", null ],
      [ "DACValue", "group__acmp.html#a54d46ea3e8fbf7e6299e4140745eb60a", null ]
    ] ],
    [ "acmp_round_robin_config_t", "group__acmp.html#structacmp__round__robin__config__t", [
      [ "fixedPort", "group__acmp.html#ab8df0b9d1c577202ee7595194effc546", null ],
      [ "fixedChannelNumber", "group__acmp.html#a585aa3db67037d896877ca36f70184b5", null ],
      [ "checkerChannelMask", "group__acmp.html#af377391bb9609189dd500f8bd4ef338d", null ],
      [ "sampleClockCount", "group__acmp.html#a14582884eb5f9eefbec82243d9532827", null ],
      [ "delayModulus", "group__acmp.html#a9f700106cee0d8dfa4c40caa340f0ed7", null ]
    ] ],
    [ "FSL_ACMP_DRIVER_VERSION", "group__acmp.html#gad94124dc79cbfc1dd370935c6855bcf4", null ],
    [ "CMP_C0_CFx_MASK", "group__acmp.html#ga75eae12123a961a26a9932904eafc1a0", null ],
    [ "_acmp_interrupt_enable", "group__acmp.html#ga038688cc7d01441f9e91700b19a33957", [
      [ "kACMP_OutputRisingInterruptEnable", "group__acmp.html#gga038688cc7d01441f9e91700b19a33957ac9ab1ae54087debc022a7061706f6a7f", null ],
      [ "kACMP_OutputFallingInterruptEnable", "group__acmp.html#gga038688cc7d01441f9e91700b19a33957ab1d9884ba7a9e937118d6664f1b31ab1", null ],
      [ "kACMP_RoundRobinInterruptEnable", "group__acmp.html#gga038688cc7d01441f9e91700b19a33957a26ba63d4b46d3de21d0803a9bf64d9d7", null ]
    ] ],
    [ "_acmp_status_flags", "group__acmp.html#gabd3383878fc4bba030b2dae158a5163f", [
      [ "kACMP_OutputRisingEventFlag", "group__acmp.html#ggabd3383878fc4bba030b2dae158a5163fae32cd7b6203ba5403f3a55ae8c089f2f", null ],
      [ "kACMP_OutputFallingEventFlag", "group__acmp.html#ggabd3383878fc4bba030b2dae158a5163fae127f498a8d4aa5fbe84960534fd2943", null ],
      [ "kACMP_OutputAssertEventFlag", "group__acmp.html#ggabd3383878fc4bba030b2dae158a5163fa48635065a41a9198665a7200a20fe0e4", null ]
    ] ],
    [ "acmp_offset_mode_t", "group__acmp.html#ga0948f416de40fe9ccd3d7d8a81a8e39f", [
      [ "kACMP_OffsetLevel0", "group__acmp.html#gga0948f416de40fe9ccd3d7d8a81a8e39faac80d3a74dd86c18c2c1af425bf7818e", null ],
      [ "kACMP_OffsetLevel1", "group__acmp.html#gga0948f416de40fe9ccd3d7d8a81a8e39fac0db57919c12438c79ba9e333b4c9556", null ]
    ] ],
    [ "acmp_hysteresis_mode_t", "group__acmp.html#ga26dd2a872585c4d052d9a7ac5afdce29", [
      [ "kACMP_HysteresisLevel0", "group__acmp.html#gga26dd2a872585c4d052d9a7ac5afdce29a7e8d04e6c307bd17781134a48725bb9f", null ],
      [ "kACMP_HysteresisLevel1", "group__acmp.html#gga26dd2a872585c4d052d9a7ac5afdce29a61debf3926574c7748f2d25b06348f0a", null ],
      [ "kACMP_HysteresisLevel2", "group__acmp.html#gga26dd2a872585c4d052d9a7ac5afdce29a5279fb5578c175d6a9fbefe1e340c68b", null ],
      [ "kACMP_HysteresisLevel3", "group__acmp.html#gga26dd2a872585c4d052d9a7ac5afdce29abb4da35062080688ee73ee974a849c71", null ]
    ] ],
    [ "acmp_reference_voltage_source_t", "group__acmp.html#gace2f2a147cfa6b558d01e2a9eed6b9a7", [
      [ "kACMP_VrefSourceVin1", "group__acmp.html#ggace2f2a147cfa6b558d01e2a9eed6b9a7adb1cc62b0c72f04d82412617f640a33b", null ],
      [ "kACMP_VrefSourceVin2", "group__acmp.html#ggace2f2a147cfa6b558d01e2a9eed6b9a7a5bee9de433c812c0e4d1783c68c3f27f", null ]
    ] ],
    [ "acmp_port_input_t", "group__acmp.html#ga4d47ae53db556112eb0839be827f32bd", [
      [ "kACMP_PortInputFromDAC", "group__acmp.html#gga4d47ae53db556112eb0839be827f32bda627feb8de51ea6ad8837b360eba4b11d", null ],
      [ "kACMP_PortInputFromMux", "group__acmp.html#gga4d47ae53db556112eb0839be827f32bda9a9cf3d4aec38e6707948148c647eb9e", null ]
    ] ],
    [ "acmp_fixed_port_t", "group__acmp.html#ga675578e0e0bce5a453a2f0680f0b8df1", [
      [ "kACMP_FixedPlusPort", "group__acmp.html#gga675578e0e0bce5a453a2f0680f0b8df1a97b367eaa692f0c6ba6dd1f0223d7d96", null ],
      [ "kACMP_FixedMinusPort", "group__acmp.html#gga675578e0e0bce5a453a2f0680f0b8df1af4c9ed7037cf3754a4343dd9941287fa", null ]
    ] ],
    [ "ACMP_Init", "group__acmp.html#ga7d637ca14d7377f3cafb5737fee130a9", null ],
    [ "ACMP_Deinit", "group__acmp.html#gaa2fb24fced5ab6d71e7372132cea0c4a", null ],
    [ "ACMP_GetDefaultConfig", "group__acmp.html#gafa96393234eb7b56c88b95d631ca983b", null ],
    [ "ACMP_Enable", "group__acmp.html#ga100dd2cf37519abd251c55f17f59c11e", null ],
    [ "ACMP_SetChannelConfig", "group__acmp.html#ga32069b7fc081da7ec894ae15dac3887d", null ],
    [ "ACMP_EnableDMA", "group__acmp.html#ga8f5a2138d5799fe45f30c74ff8e0390e", null ],
    [ "ACMP_EnableWindowMode", "group__acmp.html#gae13b23ee148ec4ad9e8e0b6d0af45b8a", null ],
    [ "ACMP_SetFilterConfig", "group__acmp.html#ga072afeee863071275e361b910cf39088", null ],
    [ "ACMP_SetDACConfig", "group__acmp.html#gabd3b4504ed35640370dbd7e236eb1367", null ],
    [ "ACMP_SetRoundRobinConfig", "group__acmp.html#gafd96d37ee52ed746c31e2e367b2a4b90", null ],
    [ "ACMP_SetRoundRobinPreState", "group__acmp.html#ga24d98d134d2da688dc48b0f2e7a7dddb", null ],
    [ "ACMP_GetRoundRobinStatusFlags", "group__acmp.html#ga4fc67911703f83766a4202bdd018a750", null ],
    [ "ACMP_ClearRoundRobinStatusFlags", "group__acmp.html#ga9fb40f6bab17edd7957e415de95664cd", null ],
    [ "ACMP_GetRoundRobinResult", "group__acmp.html#ga17c480619e43b2e4402960a700079543", null ],
    [ "ACMP_EnableInterrupts", "group__acmp.html#gac5adb0b6498ef8e4ae56717da0690680", null ],
    [ "ACMP_DisableInterrupts", "group__acmp.html#gaa242deae42b1632a288243b907bf8408", null ],
    [ "ACMP_GetStatusFlags", "group__acmp.html#ga1d8e8824754065d93bfffd31e2517c84", null ],
    [ "ACMP_ClearStatusFlags", "group__acmp.html#gaecc1b9be2d4f7227aae95de1a4c5b567", null ]
];