export type NsockEngine = 'epoll' | 'kqueue' | 'poll' | 'select' | 'iocp'
export type ScanTiming = 'paranoid' | 'sneaky' | 'polite' | 'normal' | 'aggressive' | 'insane'

export interface MinHostgroupOption {
    minHostgroup?: number
}

export interface MaxHostgroupOption {
    maxHostgroup?: number
}

export interface MinParallelismOption {
    minParallelism?: number
}

export interface MaxParallelismOption {
    maxParallelism?: number
}

export interface MinRttTimeoutOption {
    minRttTimeout?: number
}

export interface MaxRttTimeoutOption {
    maxRttTimeout?: number
}

export interface InitialRttTimeoutOption {
    initialRttTimeout?: number
}

export interface MaxRetriesOption {
    maxRetries?: number
}

export interface HostTimeoutOption {
    hostTimeout?: number
}

export interface ScriptTimeoutOption {
    scriptTimeout?: number
}

export interface ScanDelayOption {
    scanDelay?: number
}

export interface MaxScanDelayOption {
    maxScanDelay?: number
}

export interface MinRateOption {
    minRate?: number
}

export interface MaxRateOption {
    maxRate?: number
}

export interface IgnoreRstRateLimitOption {
    ignoreRstRateLimit?: boolean
}

export interface IgnoreIcmpRateLimitOption {
    ignoreIcmpRateLimit?: boolean
}

export interface NsockEngineOption {
    nsockEngine?: NsockEngine
}

export interface TimingOption {
    timing?: ScanTiming | number
}
