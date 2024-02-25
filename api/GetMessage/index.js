module.exports = async function (context, req) {
  const date = "2024-02-25T12:14:35.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

