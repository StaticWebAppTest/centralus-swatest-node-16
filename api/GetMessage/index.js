module.exports = async function (context, req) {
  const date = "2024-09-16T16:13:35.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

