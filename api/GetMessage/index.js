module.exports = async function (context, req) {
  const date = "2025-01-17T13:16:43.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

