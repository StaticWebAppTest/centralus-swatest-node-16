module.exports = async function (context, req) {
  const date = "2023-06-17T20:08:32.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

