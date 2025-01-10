module.exports = async function (context, req) {
  const date = "2025-01-10T19:09:14.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

