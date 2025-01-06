module.exports = async function (context, req) {
  const date = "2025-01-06T12:23:25.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

