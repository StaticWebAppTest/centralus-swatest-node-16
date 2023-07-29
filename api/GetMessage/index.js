module.exports = async function (context, req) {
  const date = "2023-07-29T08:09:47.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

