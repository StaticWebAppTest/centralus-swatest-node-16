module.exports = async function (context, req) {
  const date = "2025-12-20T15:13:03.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

