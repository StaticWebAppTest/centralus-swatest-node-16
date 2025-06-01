module.exports = async function (context, req) {
  const date = "2025-06-01T09:12:55.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

