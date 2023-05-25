module.exports = async function (context, req) {
  const date = "2023-05-25T12:16:56.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

