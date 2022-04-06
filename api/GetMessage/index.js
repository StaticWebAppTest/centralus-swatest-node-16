module.exports = async function (context, req) {
  const date = "2022-04-06T13:22:34.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

