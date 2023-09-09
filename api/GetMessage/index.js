module.exports = async function (context, req) {
  const date = "2023-09-09T20:08:14.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

