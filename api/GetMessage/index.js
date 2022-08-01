module.exports = async function (context, req) {
  const date = "2022-08-01T06:27:39.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

