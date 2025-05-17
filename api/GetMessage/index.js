module.exports = async function (context, req) {
  const date = "2025-05-17T20:13:20.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

