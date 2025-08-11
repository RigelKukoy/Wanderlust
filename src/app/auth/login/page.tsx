import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
function LoginAdmin() {
  return (
    <div className="flex max-h-[500px] max-w-xl flex-1 items-center shadow-xl md:max-h-[600px]">
      <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-20 lg:p-23">
        <div className="mb-2 text-3xl font-bold md:text-3xl lg:mb-6 lg:text-4xl">
          Welcome back!
        </div>
        <div className="mb-9">please enter your details</div>
        <div className="flex w-full max-w-3xs min-w-2xs flex-col justify-start md:max-w-xl">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-col gap-3">
              <Label htmlFor="email" className="text-gray-500">
                Email adress:
              </Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="enter your email adress"
              ></Input>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="password" className="text-gray-500">
                Password:
              </Label>
              <Input
                type="password"
                id="password"
                name="assword"
                placeholder="enter you password"
              ></Input>
            </div>
          </div>

          <div className="mt-2 mb-6 flex flex-row items-center gap-1">
            <Checkbox id="rememberPassword" />
            <Label htmlFor="rememberPassword" className="font-light">
              Remember me?
            </Label>

            <a
              className="ml-auto flex items-end text-sm text-sky-500 hover:underline"
              href="_blank"
            >
              forgot password?
            </a>
          </div>

          <div className="flex flex-1">
            <Button className="flex flex-1 bg-blue-500 hover:bg-blue-400">
              Log In
            </Button>
          </div>

          <div className="my-2 flex w-full items-center gap-2 text-sm text-gray-500">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="whitespace-nowrap">or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex flex-1 justify-between">
            <Button className="min-w-32 border border-slate-500 bg-white text-black hover:border-none hover:bg-blue-400 hover:text-white lg:max-w-44 lg:min-w-40">
              <img src="/google-logo.svg" className="h-5 w-5" />
              Google
            </Button>
            <Button className="min-w-32 border border-slate-500 bg-white text-black hover:border-none hover:bg-blue-400 hover:text-white lg:max-w-44 lg:min-w-40">
              <img src="/facebook-logo.svg" className="h-5 w-5" />
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
