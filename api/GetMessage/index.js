module.exports = async function (context, req) {
  const date = "2025-08-06T19:14:42.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

