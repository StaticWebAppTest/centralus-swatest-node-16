module.exports = async function (context, req) {
  const date = "2023-01-25T00:50:05.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

