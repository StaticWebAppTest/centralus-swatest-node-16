module.exports = async function (context, req) {
  const date = "2022-04-21T13:25:49.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

