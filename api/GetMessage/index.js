module.exports = async function (context, req) {
  const date = "2022-03-26T13:14:51.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

