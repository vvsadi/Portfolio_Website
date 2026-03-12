import radiantLogo from '../assets/radiant-logo.png';
import bmoLogo from '../assets/bmo-blue-on-transparent-en.png';
import oracleLogo from '../assets/oracle.png';
import cspo from '../assets/CSPO.png';
import ociAI from '../assets/OCI AI.png';
import oci from '../assets/OCI Foundations.png';
import cspoCert from '../assets/Aditya CSPO.pdf';
import ociAICert from '../assets/OCI AI Foundations Associate 2025.pdf';
import ociCert from '../assets/OCI Foundations Associate 2025.pdf';

export default function Experience() {
  return (
    <>
      <section className="py-10 border-t border-slate-100 dark:border-slate-800" id="certifications">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">verified_user</span> Certifications
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[200px] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <img alt="Certification Badge" className="w-24 h-24 object-contain" src={cspo} />
            <span className="text-xs font-bold text-center text-slate-700 dark:text-slate-200 uppercase tracking-wider">
              Certified Scrum Product Owner
            </span>
            <a
              href={cspoCert}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline"
            >
              View Certificate
            </a>
          </div>
          <div className="min-w-[200px] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <img
              alt="Certification Badge"
              className="w-24 h-24 object-contain"
              src={ociAI}
            />
            <span className="text-xs font-bold text-center text-slate-700 dark:text-slate-200 uppercase tracking-wider">
              Oracle OCI AI Foundations Associate
            </span>
            <a
              href={ociAICert}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline"
            >
              View Certificate
            </a>
          </div>
          <div className="min-w-[200px] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            <img
              alt="Certification Badge"
              className="w-24 h-24 object-contain"
              src={oci}
            />
            <span className="text-xs font-bold text-center text-slate-700 dark:text-slate-200 uppercase tracking-wider">
              Oracle OCI Foundations Associate
            </span>
            <a
              href={ociCert}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline"
            >
              View Certificate
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-10 border-t border-slate-100 dark:border-slate-800" id="experience">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">work</span> Professional Experience
        </h2>
        
        <div className="mb-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow gap-4">
              <img alt="Radiant Digital Logo" className="h-12 w-auto object-contain" src={radiantLogo}/>
              <span className="font-bold text-base text-slate-700 dark:text-slate-200">Radiant Digital</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow gap-4">
              <img alt="Bank of Montreal Logo" className="h-12 w-auto object-contain" src={bmoLogo}/>
              <span className="font-bold text-base text-slate-700 dark:text-slate-200">Bank of Montreal</span>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow gap-4">
              <img alt="Oracle Logo" className="h-12 w-auto object-contain" src={oracleLogo}/>
              <span className="font-bold text-base text-slate-700 dark:text-slate-200">Oracle</span>
            </div>
          </div>
          <div className="flex justify-end">
            <a className="text-primary font-bold text-sm flex items-center gap-1 hover:underline" href="#">
              View All Companies <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
          {/* Radiant Digital */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">radio_button_checked</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Radiant Digital</h4>
                <span className="text-xs font-medium text-slate-400 uppercase">Full-Time</span>
              </div>
              <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wide">Product Owner Intern</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3 -mt-2">August 2025 – Present</p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>Leading social management platform migration strategies.</li>
                <li>Translating vision into actionable user stories and backlogs.</li>
                <li>Coordinating daily stand-ups with engineering and design teams.</li>
              </ul>
            </div>
          </div>
          {/* BMO Bank */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">radio_button_checked</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Bank of Montreal</h4>
                <span className="text-xs font-medium text-slate-400 uppercase">Internship</span>
              </div>
              <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wide">Software Developer Intern</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3 -mt-2">June 2024 – August 2024</p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>Modernizing backend architecture from Java to Python.</li>
                <li>Building serverless applications with AWS Lambda.</li>
                <li>Developing and documenting robust REST APIs.</li>
              </ul>
            </div>
          </div>
          {/* Oracle */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">radio_button_checked</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Oracle</h4>
                <span className="text-xs font-medium text-slate-400 uppercase">Full-Time</span>
              </div>
              <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wide">Staff Consultant</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3 -mt-2">September 2022 – February 2023</p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>Led functional delivery of Oracle Fusion HCM modules, supporting enterprise HR transformations for large organizations.</li>
                <li>Worked closely with clients to analyze HR processes and translate HR requirements into technical solutions across Core HR, Absence Management, and related modules.</li>
                <li>Guided testing, validation, and deployment activities to ensure smooth implementation and adoption of HR technology solutions.</li>
              </ul>
            </div>
          </div>
          {/* Oracle */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="material-symbols-outlined text-sm">radio_button_checked</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Oracle</h4>
                <span className="text-xs font-medium text-slate-400 uppercase">Full-Time</span>
              </div>
              <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wide">Associate Consultant</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-3 -mt-2">September 2020 – August 2022</p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>Worked on enterprise Oracle Fusion HCM implementations, helping configure and deliver Core HR and Absence Management solutions.</li>
                <li>Designed and automated HR workflows to streamline processes like leave management, employee records, and policy compliance.</li>
                <li>Developed analytical reporting solutions to track compliance adherence workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
