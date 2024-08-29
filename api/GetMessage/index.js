module.exports = async function (context, req) {
  const date = "2024-08-29T13:16:58.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

