module.exports = async function (context, req) {
  const date = "2022-09-20T20:13:24.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

