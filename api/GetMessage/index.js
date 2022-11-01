module.exports = async function (context, req) {
  const date = "2022-11-01T22:13:23.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

