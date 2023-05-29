module.exports = async function (context, req) {
  const date = "2023-05-29T05:08:31.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

