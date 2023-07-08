module.exports = async function (context, req) {
  const date = "2023-07-08T21:08:04.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

