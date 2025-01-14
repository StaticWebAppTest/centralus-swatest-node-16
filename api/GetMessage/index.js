module.exports = async function (context, req) {
  const date = "2025-01-14T21:10:37.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

