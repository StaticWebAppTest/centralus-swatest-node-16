module.exports = async function (context, req) {
  const date = "2022-12-26T06:12:43.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

