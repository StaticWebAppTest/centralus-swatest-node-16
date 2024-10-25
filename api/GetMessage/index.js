module.exports = async function (context, req) {
  const date = "2024-10-25T16:14:27.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

