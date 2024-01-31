module.exports = async function (context, req) {
  const date = "2024-01-31T20:08:57.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

