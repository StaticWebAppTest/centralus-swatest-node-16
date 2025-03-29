module.exports = async function (context, req) {
  const date = "2025-03-29T14:11:20.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

