module.exports = async function (context, req) {
  const date = "2025-01-27T03:14:24.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

