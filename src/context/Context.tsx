import { useNavigate } from "react-router-dom";
import { myAxios } from "../service/axios/index";
import { toast } from "react-toastify";

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const MyContext = createContext({});
export interface IContext {
  // Login
  auth?: {};
  setAuth?: Dispatch<SetStateAction<{}>>;
  userLogin?: () => Response;
  // Position
  getPosition?: () => Promise<void>;
  postPosition?: Function;
  putPosition?: Function;
  deletePosition?: Function;
  userPosit?: IPosit<IData>;
  setUserPosit?: Dispatch<SetStateAction<{}>>;
  // Field
  getFeild?: () => Promise<void>;
  userField?: IPosit<IData>;
  postFeild?: Function;
  deleteFeild?: Function;
  PutFeild?: Function;
  // Agenda
  userAgenda?: IPosit<IData>;
  setUserAgenda?: Dispatch<SetStateAction<{}>>;
  getAgenda?: () => Promise<void>;
  postAgenda?: Function;
  deleteAgenda?: Function;
  putAgenda?: Function;
  // Loading
  loading?: boolean;
  addLoading?: boolean;
  setLoading?: Function;
  // users
  Getusers?: () => Promise<void>;
  users?: IPosit<IData>;
  postUsers?: Function;
  usersDelete?: Function;
  usersPut?: Function;
  // Speaker
  SpeakerGet?: () => Promise<void>;
  usersSpeaker?: any;
  SpeakerPost?: Function;
  SpeakerDelete?: Function;
  SpeakerPut?: Function;
  // TICKETS
  getTickets?: () => Promise<void> | undefined;
  postTickets?: Function;
  putTickets?: Function;
  ticketsDelete?: Function;
  tickets?: any;
}
export interface ILogin {
  backfon?: string;
  userLogin?: (value: IUser) => Promise<void>;
  user?: IUser;
}

// AUTH state interface
export interface IRes {
  data: {
    code: number;
    message: string;
    data: {
      password: string;
      phoneNumber: string;
      token: string;
      _id: string;
      isAuth: boolean;
    };
  };
}

// Login interface
export interface IUser {
  password: string;
  phoneNumber: string;
}

// Position interface
export interface IPosit<T> {
  total: number;
  data: T[];
}
export interface IData {
  _id: string;
  checked?: boolean;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  __v: number;
  type: string;
  startTime: string;
  endTime: string;
}
export interface Speaker {
  data: {
    _id: string;
    checked?: boolean;
    name: {
      uz: string;
      en: string;
      ru: string;
    };
    bio?: {
      uz: string;
      en: string;
      ru: string;
    };
    image?: string;
    __v?: number;
  };
}
export interface S {
  _id: string;
  checked?: boolean;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  bio?: {
    uz: string;
    en: string;
    ru: string;
  };
  image?: string;
  __v?: number;
}
export interface IUsers {
  _id?: string;
  phoneNumber?: string;
  fullName?: string;
  fieldId?: string;
  brand?: string;
  employeeCount?: number;
  positionId?: string;
  __v?: number;
}
export interface Adduser {
  adduser: boolean;
  set: Function;
  user?: any;
}

const LoginContext: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  // AUTH state
  const [auth, setAuth] = useState({
    token: "",
    _id: "",
    phoneNumber: "",
    password: "",
    isAuth: false,
  });

  // POSITION REQUEST INTERFACE
  const [userPosit, setUserPosit] = useState<IPosit<[IData]>>({
    total: 0,
    data: [],
  });
  // FIELD REQUEST INTERFACE
  const [userField, setUserField] = useState<IPosit<[IData]>>({
    total: 0,
    data: [],
  });
  // AGENDA REQUEST INTERFACE
  const [userAgenda, setUserAgenda] = useState<IPosit<[IData]>>({
    total: 0,
    data: [],
  });
  // USERS REQUEST INTERFACE
  const [users, setusers] = useState<IPosit<IUsers>>({ total: 0, data: [] });
  // TICKETS REQUEST INTERFACE
  const [tickets, setTickets] = useState<IPosit<IUsers>>({
    total: 0,
    data: [],
  });
  // SPEAKERS REQUEST INTERFACE
  const [usersSpeaker, setusersSpeaker] = useState<IPosit<Speaker>>({
    total: 0,
    data: [],
  });
  // LOADING STATE
  const [loading, setLoading] = useState<boolean>(false);

  // AUTH STATE SUCSESS SET
  function sucsess(res: IRes) {
    setAuth((p) => ({
      ...p,
      token: res.data.data.token,
      _id: res.data.data._id,
      phoneNumber: res.data.data.phoneNumber,
      password: res.data.data.password,
      isAuth: true,
    }));
    localStorage.setItem("TOKEN", res.data.data.token);
    localStorage.setItem("ISAUTH", "true");
  }

  // LOGIN ========================
  async function userLogin(user: IUser) {
    try {
      const res: IRes = await myAxios.post("/login", user);
      sucsess(res);
      navigate("/users");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      console.log("Ishlamadiii");
    }
  }
  //  ==========================================

  // FIELD CRUD FUNCTIONS ======================

  // POSITION GET STATE SUCSESS SET
  function sucsessPosit(res: IPosit<[IData]>) {
    setUserPosit(res);
  }

  // POSITIONS GET
  async function getPosition() {
    setLoading(true);
    try {
      const res = await myAxios.get("/position");
      if (res?.data) sucsessPosit(res.data.data);
    } catch (error) {
      console.log("Ishlamadi Position !");
    } finally {
      setLoading(false);
    }
  }
  // position DELETE
  async function deletePosition(ids: {}) {
    try {
      const res = await myAxios.delete("/position", { data: ids });
      getPosition();
      toast.success("nme choptin");
    } catch (error) {
      toast.error("shuniyam uchiromadinmi");
      console.log("Delete Position ishlamadi !");
    }
  }

  // position POST
  async function postPosition(name: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/position", name);
      getPosition();
      toast.success("field qo'shildi");
    } catch (error) {
      toast.error("notugre yozdin");
    } finally {
      setLoading(false);
    }
  }
  // PUT Position
  async function putPosition(user: {}) {
    setLoading(true);
    try {
      const res = await myAxios.put("/position", user);
      getPosition();

      toast.success(res.data.message);
    } catch (error) {
      console.log("Put Position ishlamadi !");
    } finally {
      setLoading(false);
    }
  }
  // ===============================================

  // FIELD CRUD FUNCTIONS ======================
  // Feild POST
  async function postFeild(name: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/field", name);
      getFeild();
      toast.success(res.data.message);
    } catch (error) {
      console.log("Post Position ishlamadi !");
    } finally {
      setLoading(false);
    }
  }
  // Feild GET
  async function getFeild() {
    setLoading(true);
    try {
      const res = await myAxios.get("/field");
      if (res?.data) sucsessField(res.data.data);
    } catch (error) {
      console.log("Ishlamadi Feild !");
    } finally {
      setLoading(false);
    }
  }

  // Feild DELETE
  async function deleteFeild(ids: {}) {
    try {
      const res = await myAxios.delete("/field", { data: ids });
      getFeild();
      toast.success("nme choptin");
    } catch (error) {
      toast.error("shuniyam uchirodaminmi");
      console.log("Delete  ishlamadi !");
      throw error;
    }
  }
  // Feild PUT
  async function PutFeild(body: {}) {
    try {
      const res = await myAxios.put("/field", body);
      toast.success(res.data.message);
      getFeild();
    } catch (error) {
      throw error;
    }
  }

  function sucsessField(res: IPosit<[IData]>) {
    setUserField(res);
  }
  // ===============================================

  // AGENDA GET STATE SUCSESS SET
  function sucsessAgenda(res: IPosit<[IData]>) {
    setUserAgenda(res);
  }

  // Agenda GET
  async function getAgenda() {
    setLoading(true);
    try {
      const res = await myAxios.get("/agenda");
      if (res?.data) sucsessAgenda(res.data.data);
    } catch (error) {
      console.log("Ishlamadi Agenda !");
    } finally {
      setLoading(false);
    }
  }
  // Agenda DELETE
  async function deleteAgenda(ids: {}) {
    try {
      const res = await myAxios.delete("/agenda", { data: ids });
      getAgenda();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("shuniyam uchirodaminmi");
      throw error;
    }
  }

  // Agenda POST
  async function postAgenda(name: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/agenda", name);
      getAgenda();
      toast.success(res.data.message);
    } catch (error) {
      console.log("Post Agenda ishlamadi !");
      toast.success("narmalni sana yoz");
    } finally {
      setLoading(false);
    }
  }
  // Agenda PUT
  async function putAgenda(ketmon: {}) {
    try {
      const res = await myAxios.put("/agenda", ketmon);
      getAgenda();
      toast.success(res.data.message);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // ===============================================
  // USERS
  // get users
  async function Getusers() {
    setLoading(true);
    try {
      const res = await myAxios("user?page=1&limit=10");
      setusers(res.data.data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // post users
  async function postUsers(body: any) {
    setLoading(true);
    try {
      const res = await myAxios.post("/user", body);
      Getusers();
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      toast.error("ohirigacha yozing");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // delete users
  async function usersDelete(ids: {}) {
    setLoading(true);
    try {
      const res = await myAxios.delete("user", { data: ids });
      Getusers();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("shuniyam uchiromadinmi");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // users put
  async function usersPut(user: {}) {
    setLoading(true);
    try {
      const res = await myAxios.put("user", user);
      Getusers();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Userni noto'g'ri o'zgartirdingiz !");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  /////////////////////////////////////////////////////
  // get speaker
  async function SpeakerGet() {
    setLoading(true);
    try {
      const res = await myAxios.get("/speaker");
      setusersSpeaker(res.data.data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // post speaker
  async function SpeakerPost(body: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/speaker", body);
      toast.success(res.data.message);
      SpeakerGet();
    } catch (error) {
      toast.error("ne uspeshno");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // delete speaker
  async function SpeakerDelete(ketmon: {}) {
    setLoading(true);
    try {
      const res = await myAxios.delete("/speaker", { data: ketmon });
      toast.success(res.data.message);
      SpeakerGet();
    } catch (error) {
      toast.error("shuniyam uchiromadinmi");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // put speaker
  async function SpeakerPut(body: {}) {
    setLoading(true);
    try {
      const res = await myAxios.put("/speaker", body);
      SpeakerGet();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("chort tugri yoz");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // ============================================

  // TICKETS ================
  // GET TICKETS
  async function getTickets() {
    setLoading(true);
    try {
      const res = await myAxios("ticket?page=1&limit=10");
      setTickets(res.data.data);
    } catch (error) {
      toast.error("internetine yoq");
      throw error;
    } finally {
      setLoading(false);
    }
  }
  // post tickets
  async function postTickets(body: {}) {
    setLoading(true);
    try {
      const res = await myAxios.post("/ticket", body);
      getTickets();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("hayajonlanmen, qo'shomadiz");
      throw error;
    } finally {
      setLoading(false);
    }
  }

  // put Tickets
  async function putTickets(body: {}) {
    setLoading(true);
    try {
      const res = await myAxios.put("/ticket", body);
      getTickets();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("o'zgartirolmadin");
      throw error;
    } finally {
      setLoading(false);
    }
  }

  // delete tickets
  async function ticketsDelete(ids: {}) {
    setLoading(true);
    try {
      const res = await myAxios.delete("ticket", { data: ids });
      getTickets();
      toast.success(res.data.message);
    } catch (error) {
      toast.error("duhine osa kuldiradiya");
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        userLogin,
        userPosit,
        setUserPosit,
        getPosition,
        postPosition,
        putPosition,
        deletePosition,
        postFeild,
        getFeild,
        userField,
        userAgenda,
        deleteFeild,
        PutFeild,
        postAgenda,
        getAgenda,
        deleteAgenda,
        loading,
        setLoading,
        Getusers,
        users,
        putAgenda,
        postUsers,
        usersPut,
        usersDelete,
        //speaker
        SpeakerGet,
        SpeakerPost,
        SpeakerDelete,
        SpeakerPut,
        usersSpeaker,
        //tickets
        getTickets,
        postTickets,
        putTickets,
        ticketsDelete,
        tickets,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default LoginContext;
