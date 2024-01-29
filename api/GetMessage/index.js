module.exports = async function (context, req) {
  const date = "2024-01-29T12:15:59.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

