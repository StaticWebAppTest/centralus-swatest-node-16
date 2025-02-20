module.exports = async function (context, req) {
  const date = "2025-02-20T15:13:04.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

