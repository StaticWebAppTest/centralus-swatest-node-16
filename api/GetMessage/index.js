module.exports = async function (context, req) {
  const date = "2022-07-31T12:19:48.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

