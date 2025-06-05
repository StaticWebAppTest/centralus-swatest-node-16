module.exports = async function (context, req) {
  const date = "2025-06-05T13:27:44.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

