module.exports = async function (context, req) {
  const date = "2023-06-14T19:06:59.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

