module.exports = async function (context, req) {
  const date = "2024-08-17T10:10:53.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

