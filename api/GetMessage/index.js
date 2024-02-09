module.exports = async function (context, req) {
  const date = "2024-02-09T20:09:03.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

