module.exports = async function (context, req) {
  const date = "2025-02-01T12:19:32.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

