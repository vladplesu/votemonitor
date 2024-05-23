/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ResponsesIndexImport } from './routes/responses/index'
import { Route as ResetPasswordIndexImport } from './routes/reset-password/index'
import { Route as ObserversIndexImport } from './routes/observers/index'
import { Route as NgosIndexImport } from './routes/ngos/index'
import { Route as MonitoringObserversIndexImport } from './routes/monitoring-observers/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as FormsIndexImport } from './routes/forms/index'
import { Route as FormTemplatesIndexImport } from './routes/form-templates/index'
import { Route as ForgotPasswordIndexImport } from './routes/forgot-password/index'
import { Route as ElectionRoundsIndexImport } from './routes/election-rounds/index'
import { Route as ElectionEventIndexImport } from './routes/election-event/index'
import { Route as AcceptInviteIndexImport } from './routes/accept-invite/index'
import { Route as ResponsesSubmissionIdImport } from './routes/responses/$submissionId'
import { Route as ObserversObserverIdImport } from './routes/observers/$observerId'
import { Route as NgosNgoIdImport } from './routes/ngos/$ngoId'
import { Route as MonitoringObserversCreateNewMessageImport } from './routes/monitoring-observers/create-new-message'
import { Route as MonitoringObserversTabImport } from './routes/monitoring-observers/$tab'
import { Route as FormsFormIdImport } from './routes/forms/$formId'
import { Route as ElectionRoundsElectionRoundIdImport } from './routes/election-rounds/$electionRoundId'
import { Route as ElectionEventTabImport } from './routes/election-event/$tab'
import { Route as ResponsesQuickReportsQuickReportIdImport } from './routes/responses/quick-reports/$quickReportId'
import { Route as ResponsesFormIdAggregatedImport } from './routes/responses/$formId.aggregated'
import { Route as ObserversObserverIdEditImport } from './routes/observers_.$observerId.edit'
import { Route as MonitoringObserversEditMonitoringObserverIdImport } from './routes/monitoring-observers/edit.$monitoringObserverId'
import { Route as FormsFormIdEditImport } from './routes/forms_.$formId.edit'
import { Route as FormsFormIdLanguageCodeImport } from './routes/forms/$formId_.$languageCode'
import { Route as FormTemplatesFormTemplateIdEditImport } from './routes/form-templates_.$formTemplateId.edit'
import { Route as FormTemplatesFormTemplateIdLanguageCodeImport } from './routes/form-templates/$formTemplateId_.$languageCode'
import { Route as MonitoringObserversViewMonitoringObserverIdTabImport } from './routes/monitoring-observers/view/$monitoringObserverId.$tab'
import { Route as MonitoringObserversPushMessagesIdViewImport } from './routes/monitoring-observers/push-messages.$id.view'
import { Route as FormsFormIdEditTranslationLanguageCodeImport } from './routes/forms_.$formId.edit-translation.$languageCode'
import { Route as FormTemplatesFormTemplateIdEditTranslationLanguageCodeImport } from './routes/form-templates_.$formTemplateId.edit-translation.$languageCode'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ResponsesIndexRoute = ResponsesIndexImport.update({
  path: '/responses/',
  getParentRoute: () => rootRoute,
} as any)

const ResetPasswordIndexRoute = ResetPasswordIndexImport.update({
  path: '/reset-password/',
  getParentRoute: () => rootRoute,
} as any)

const ObserversIndexRoute = ObserversIndexImport.update({
  path: '/observers/',
  getParentRoute: () => rootRoute,
} as any)

const NgosIndexRoute = NgosIndexImport.update({
  path: '/ngos/',
  getParentRoute: () => rootRoute,
} as any)

const MonitoringObserversIndexRoute = MonitoringObserversIndexImport.update({
  path: '/monitoring-observers/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const FormsIndexRoute = FormsIndexImport.update({
  path: '/forms/',
  getParentRoute: () => rootRoute,
} as any)

const FormTemplatesIndexRoute = FormTemplatesIndexImport.update({
  path: '/form-templates/',
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordIndexRoute = ForgotPasswordIndexImport.update({
  path: '/forgot-password/',
  getParentRoute: () => rootRoute,
} as any)

const ElectionRoundsIndexRoute = ElectionRoundsIndexImport.update({
  path: '/election-rounds/',
  getParentRoute: () => rootRoute,
} as any)

const ElectionEventIndexRoute = ElectionEventIndexImport.update({
  path: '/election-event/',
  getParentRoute: () => rootRoute,
} as any)

const AcceptInviteIndexRoute = AcceptInviteIndexImport.update({
  path: '/accept-invite/',
  getParentRoute: () => rootRoute,
} as any)

const ResponsesSubmissionIdRoute = ResponsesSubmissionIdImport.update({
  path: '/responses/$submissionId',
  getParentRoute: () => rootRoute,
} as any)

const ObserversObserverIdRoute = ObserversObserverIdImport.update({
  path: '/observers/$observerId',
  getParentRoute: () => rootRoute,
} as any)

const NgosNgoIdRoute = NgosNgoIdImport.update({
  path: '/ngos/$ngoId',
  getParentRoute: () => rootRoute,
} as any)

const MonitoringObserversCreateNewMessageRoute =
  MonitoringObserversCreateNewMessageImport.update({
    path: '/monitoring-observers/create-new-message',
    getParentRoute: () => rootRoute,
  } as any)

const MonitoringObserversTabRoute = MonitoringObserversTabImport.update({
  path: '/monitoring-observers/$tab',
  getParentRoute: () => rootRoute,
} as any)

const FormsFormIdRoute = FormsFormIdImport.update({
  path: '/forms/$formId',
  getParentRoute: () => rootRoute,
} as any)

const ElectionRoundsElectionRoundIdRoute =
  ElectionRoundsElectionRoundIdImport.update({
    path: '/election-rounds/$electionRoundId',
    getParentRoute: () => rootRoute,
  } as any)

const ElectionEventTabRoute = ElectionEventTabImport.update({
  path: '/election-event/$tab',
  getParentRoute: () => rootRoute,
} as any)

const ResponsesQuickReportsQuickReportIdRoute =
  ResponsesQuickReportsQuickReportIdImport.update({
    path: '/responses/quick-reports/$quickReportId',
    getParentRoute: () => rootRoute,
  } as any)

const ResponsesFormIdAggregatedRoute = ResponsesFormIdAggregatedImport.update({
  path: '/responses/$formId/aggregated',
  getParentRoute: () => rootRoute,
} as any)

const ObserversObserverIdEditRoute = ObserversObserverIdEditImport.update({
  path: '/observers/$observerId/edit',
  getParentRoute: () => rootRoute,
} as any)

const MonitoringObserversEditMonitoringObserverIdRoute =
  MonitoringObserversEditMonitoringObserverIdImport.update({
    path: '/monitoring-observers/edit/$monitoringObserverId',
    getParentRoute: () => rootRoute,
  } as any)

const FormsFormIdEditRoute = FormsFormIdEditImport.update({
  path: '/forms/$formId/edit',
  getParentRoute: () => rootRoute,
} as any)

const FormsFormIdLanguageCodeRoute = FormsFormIdLanguageCodeImport.update({
  path: '/forms/$formId/$languageCode',
  getParentRoute: () => rootRoute,
} as any)

const FormTemplatesFormTemplateIdEditRoute =
  FormTemplatesFormTemplateIdEditImport.update({
    path: '/form-templates/$formTemplateId/edit',
    getParentRoute: () => rootRoute,
  } as any)

const FormTemplatesFormTemplateIdLanguageCodeRoute =
  FormTemplatesFormTemplateIdLanguageCodeImport.update({
    path: '/form-templates/$formTemplateId/$languageCode',
    getParentRoute: () => rootRoute,
  } as any)

const MonitoringObserversViewMonitoringObserverIdTabRoute =
  MonitoringObserversViewMonitoringObserverIdTabImport.update({
    path: '/monitoring-observers/view/$monitoringObserverId/$tab',
    getParentRoute: () => rootRoute,
  } as any)

const MonitoringObserversPushMessagesIdViewRoute =
  MonitoringObserversPushMessagesIdViewImport.update({
    path: '/monitoring-observers/push-messages/$id/view',
    getParentRoute: () => rootRoute,
  } as any)

const FormsFormIdEditTranslationLanguageCodeRoute =
  FormsFormIdEditTranslationLanguageCodeImport.update({
    path: '/forms/$formId/edit-translation/$languageCode',
    getParentRoute: () => rootRoute,
  } as any)

const FormTemplatesFormTemplateIdEditTranslationLanguageCodeRoute =
  FormTemplatesFormTemplateIdEditTranslationLanguageCodeImport.update({
    path: '/form-templates/$formTemplateId/edit-translation/$languageCode',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/election-event/$tab': {
      preLoaderRoute: typeof ElectionEventTabImport
      parentRoute: typeof rootRoute
    }
    '/election-rounds/$electionRoundId': {
      preLoaderRoute: typeof ElectionRoundsElectionRoundIdImport
      parentRoute: typeof rootRoute
    }
    '/forms/$formId': {
      preLoaderRoute: typeof FormsFormIdImport
      parentRoute: typeof rootRoute
    }
    '/monitoring-observers/$tab': {
      preLoaderRoute: typeof MonitoringObserversTabImport
      parentRoute: typeof rootRoute
    }
    '/monitoring-observers/create-new-message': {
      preLoaderRoute: typeof MonitoringObserversCreateNewMessageImport
      parentRoute: typeof rootRoute
    }
    '/ngos/$ngoId': {
      preLoaderRoute: typeof NgosNgoIdImport
      parentRoute: typeof rootRoute
    }
    '/observers/$observerId': {
      preLoaderRoute: typeof ObserversObserverIdImport
      parentRoute: typeof rootRoute
    }
    '/responses/$submissionId': {
      preLoaderRoute: typeof ResponsesSubmissionIdImport
      parentRoute: typeof rootRoute
    }
    '/accept-invite/': {
      preLoaderRoute: typeof AcceptInviteIndexImport
      parentRoute: typeof rootRoute
    }
    '/election-event/': {
      preLoaderRoute: typeof ElectionEventIndexImport
      parentRoute: typeof rootRoute
    }
    '/election-rounds/': {
      preLoaderRoute: typeof ElectionRoundsIndexImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password/': {
      preLoaderRoute: typeof ForgotPasswordIndexImport
      parentRoute: typeof rootRoute
    }
    '/form-templates/': {
      preLoaderRoute: typeof FormTemplatesIndexImport
      parentRoute: typeof rootRoute
    }
    '/forms/': {
      preLoaderRoute: typeof FormsIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/monitoring-observers/': {
      preLoaderRoute: typeof MonitoringObserversIndexImport
      parentRoute: typeof rootRoute
    }
    '/ngos/': {
      preLoaderRoute: typeof NgosIndexImport
      parentRoute: typeof rootRoute
    }
    '/observers/': {
      preLoaderRoute: typeof ObserversIndexImport
      parentRoute: typeof rootRoute
    }
    '/reset-password/': {
      preLoaderRoute: typeof ResetPasswordIndexImport
      parentRoute: typeof rootRoute
    }
    '/responses/': {
      preLoaderRoute: typeof ResponsesIndexImport
      parentRoute: typeof rootRoute
    }
    '/form-templates/$formTemplateId/$languageCode': {
      preLoaderRoute: typeof FormTemplatesFormTemplateIdLanguageCodeImport
      parentRoute: typeof rootRoute
    }
    '/form-templates/$formTemplateId/edit': {
      preLoaderRoute: typeof FormTemplatesFormTemplateIdEditImport
      parentRoute: typeof rootRoute
    }
    '/forms/$formId/$languageCode': {
      preLoaderRoute: typeof FormsFormIdLanguageCodeImport
      parentRoute: typeof rootRoute
    }
    '/forms/$formId/edit': {
      preLoaderRoute: typeof FormsFormIdEditImport
      parentRoute: typeof rootRoute
    }
    '/monitoring-observers/edit/$monitoringObserverId': {
      preLoaderRoute: typeof MonitoringObserversEditMonitoringObserverIdImport
      parentRoute: typeof rootRoute
    }
    '/observers/$observerId/edit': {
      preLoaderRoute: typeof ObserversObserverIdEditImport
      parentRoute: typeof rootRoute
    }
    '/responses/$formId/aggregated': {
      preLoaderRoute: typeof ResponsesFormIdAggregatedImport
      parentRoute: typeof rootRoute
    }
    '/responses/quick-reports/$quickReportId': {
      preLoaderRoute: typeof ResponsesQuickReportsQuickReportIdImport
      parentRoute: typeof rootRoute
    }
    '/form-templates/$formTemplateId/edit-translation/$languageCode': {
      preLoaderRoute: typeof FormTemplatesFormTemplateIdEditTranslationLanguageCodeImport
      parentRoute: typeof rootRoute
    }
    '/forms/$formId/edit-translation/$languageCode': {
      preLoaderRoute: typeof FormsFormIdEditTranslationLanguageCodeImport
      parentRoute: typeof rootRoute
    }
    '/monitoring-observers/push-messages/$id/view': {
      preLoaderRoute: typeof MonitoringObserversPushMessagesIdViewImport
      parentRoute: typeof rootRoute
    }
    '/monitoring-observers/view/$monitoringObserverId/$tab': {
      preLoaderRoute: typeof MonitoringObserversViewMonitoringObserverIdTabImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ElectionEventTabRoute,
  ElectionRoundsElectionRoundIdRoute,
  FormsFormIdRoute,
  MonitoringObserversTabRoute,
  MonitoringObserversCreateNewMessageRoute,
  NgosNgoIdRoute,
  ObserversObserverIdRoute,
  ResponsesSubmissionIdRoute,
  AcceptInviteIndexRoute,
  ElectionEventIndexRoute,
  ElectionRoundsIndexRoute,
  ForgotPasswordIndexRoute,
  FormTemplatesIndexRoute,
  FormsIndexRoute,
  LoginIndexRoute,
  MonitoringObserversIndexRoute,
  NgosIndexRoute,
  ObserversIndexRoute,
  ResetPasswordIndexRoute,
  ResponsesIndexRoute,
  FormTemplatesFormTemplateIdLanguageCodeRoute,
  FormTemplatesFormTemplateIdEditRoute,
  FormsFormIdLanguageCodeRoute,
  FormsFormIdEditRoute,
  MonitoringObserversEditMonitoringObserverIdRoute,
  ObserversObserverIdEditRoute,
  ResponsesFormIdAggregatedRoute,
  ResponsesQuickReportsQuickReportIdRoute,
  FormTemplatesFormTemplateIdEditTranslationLanguageCodeRoute,
  FormsFormIdEditTranslationLanguageCodeRoute,
  MonitoringObserversPushMessagesIdViewRoute,
  MonitoringObserversViewMonitoringObserverIdTabRoute,
])

/* prettier-ignore-end */
