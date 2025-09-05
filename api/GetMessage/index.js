module.exports = async function (context, req) {
  const date = "2025-09-05T14:11:46.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

