module.exports = async function (context, req) {
  const date = "2025-12-06T12:26:12.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

