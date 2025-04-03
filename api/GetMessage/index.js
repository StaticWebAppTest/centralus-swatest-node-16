module.exports = async function (context, req) {
  const date = "2025-04-03T16:15:24.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

