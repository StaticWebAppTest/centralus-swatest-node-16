module.exports = async function (context, req) {
  const date = "2024-04-29T12:17:50.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

