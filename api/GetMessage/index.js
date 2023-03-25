module.exports = async function (context, req) {
  const date = "2023-03-25T00:47:05.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

