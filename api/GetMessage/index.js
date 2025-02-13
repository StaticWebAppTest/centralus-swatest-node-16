module.exports = async function (context, req) {
  const date = "2025-02-13T06:16:38.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

