module.exports = async function (context, req) {
  const date = "2023-10-02T00:41:20.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

