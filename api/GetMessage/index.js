module.exports = async function (context, req) {
  const date = "2023-06-29T20:09:54.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

