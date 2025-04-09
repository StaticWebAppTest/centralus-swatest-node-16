module.exports = async function (context, req) {
  const date = "2025-04-09T10:15:42.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

