module.exports = async function (context, req) {
  const date = "2023-01-29T19:07:05.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

