module.exports = async function (context, req) {
  const date = "2024-01-25T16:12:11.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

