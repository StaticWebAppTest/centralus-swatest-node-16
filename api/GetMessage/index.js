module.exports = async function (context, req) {
  const date = "2022-08-27T00:58:34.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

