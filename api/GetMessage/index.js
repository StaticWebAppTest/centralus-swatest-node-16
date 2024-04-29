module.exports = async function (context, req) {
  const date = "2024-04-29T19:07:16.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

