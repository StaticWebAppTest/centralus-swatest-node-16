module.exports = async function (context, req) {
  const date = "2025-05-02T20:14:33.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

