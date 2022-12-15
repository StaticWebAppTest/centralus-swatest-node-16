module.exports = async function (context, req) {
  const date = "2022-12-15T19:07:15.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

