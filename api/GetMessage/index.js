module.exports = async function (context, req) {
  const date = "2022-06-17T12:22:49.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

