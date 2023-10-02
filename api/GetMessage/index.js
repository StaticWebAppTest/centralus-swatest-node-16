module.exports = async function (context, req) {
  const date = "2023-10-02T12:17:11.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

