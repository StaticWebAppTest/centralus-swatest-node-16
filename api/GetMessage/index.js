module.exports = async function (context, req) {
  const date = "2024-06-08T12:16:36.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

