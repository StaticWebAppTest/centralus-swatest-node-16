module.exports = async function (context, req) {
  const date = "2025-01-06T17:10:32.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

