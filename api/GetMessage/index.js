module.exports = async function (context, req) {
  const date = "2023-12-29T03:10:19.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

