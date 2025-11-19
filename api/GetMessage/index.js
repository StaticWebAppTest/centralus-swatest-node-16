module.exports = async function (context, req) {
  const date = "2025-11-19T09:15:49.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

