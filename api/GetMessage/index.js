module.exports = async function (context, req) {
  const date = "2024-05-14T02:22:11.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

