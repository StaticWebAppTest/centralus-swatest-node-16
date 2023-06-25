module.exports = async function (context, req) {
  const date = "2023-06-25T10:10:12.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

