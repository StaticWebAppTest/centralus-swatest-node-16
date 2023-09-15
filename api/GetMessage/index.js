module.exports = async function (context, req) {
  const date = "2023-09-15T20:08:56.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

