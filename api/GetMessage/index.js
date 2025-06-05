module.exports = async function (context, req) {
  const date = "2025-06-05T08:18:39.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

