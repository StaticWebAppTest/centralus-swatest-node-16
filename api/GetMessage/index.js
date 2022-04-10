module.exports = async function (context, req) {
  const date = "2022-04-10T00:48:59.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

