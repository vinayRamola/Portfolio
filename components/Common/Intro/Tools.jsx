import Badge from '../Badge';
import { TECH_STACK } from '../../../constants/constants';

const Tools = () => {
  return (
    <div className="pt-6 rounded-lg shadow-lg w-full">
      {/* Heading */}
      <a
        href="https://codolio.com"  // Update with the appropriate link if needed
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-indigo-500 hover:underline"
      >
        Tools
      </a>

      {/* Tools List */}
      <div className="mt-6 space-y-6">
        <div className="border-l-4 border-yellow-400 pl-4">
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((item, index) => (
              <Badge key={index} title={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
