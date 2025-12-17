module.exports = async function (context, req) {
  const date = "2025-12-17T12:30:50.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

