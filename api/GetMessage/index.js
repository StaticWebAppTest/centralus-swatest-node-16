module.exports = async function (context, req) {
  const date = "2025-12-05T13:27:37.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

