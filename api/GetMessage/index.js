module.exports = async function (context, req) {
  const date = "2023-11-18T20:08:59.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

