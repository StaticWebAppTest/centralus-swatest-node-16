module.exports = async function (context, req) {
  const date = "2022-04-17T16:13:24.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

