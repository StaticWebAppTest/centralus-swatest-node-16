module.exports = async function (context, req) {
  const date = "2024-12-05T16:16:00.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

