module.exports = async function (context, req) {
  const date = "2025-02-20T20:13:21.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

