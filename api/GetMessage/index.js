module.exports = async function (context, req) {
  const date = "2023-04-29T12:14:49.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

