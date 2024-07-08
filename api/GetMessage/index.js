module.exports = async function (context, req) {
  const date = "2024-07-08T21:10:41.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

