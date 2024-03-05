module.exports = async function (context, req) {
  const date = "2024-03-05T02:14:37.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

