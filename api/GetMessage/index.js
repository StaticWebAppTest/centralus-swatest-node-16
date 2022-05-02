module.exports = async function (context, req) {
  const date = "2022-05-02T00:54:05.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

