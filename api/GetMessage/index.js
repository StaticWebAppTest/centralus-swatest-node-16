module.exports = async function (context, req) {
  const date = "2025-02-24T16:15:47.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

