module.exports = async function (context, req) {
  const date = "2025-05-21T20:14:45.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

