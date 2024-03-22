module.exports = async function (context, req) {
  const date = "2024-03-22T12:16:26.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

