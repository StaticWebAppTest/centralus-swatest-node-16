module.exports = async function (context, req) {
  const date = "2025-12-17T10:17:45.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

