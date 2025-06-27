module.exports = async function (context, req) {
  const date = "2025-06-27T12:27:17.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

