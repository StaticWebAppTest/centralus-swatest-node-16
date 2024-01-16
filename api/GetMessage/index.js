module.exports = async function (context, req) {
  const date = "2024-01-16T16:11:58.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

