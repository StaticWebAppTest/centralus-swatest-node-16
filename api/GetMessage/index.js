module.exports = async function (context, req) {
  const date = "2025-01-17T17:09:43.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

