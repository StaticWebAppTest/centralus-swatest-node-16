module.exports = async function (context, req) {
  const date = "2023-03-19T00:56:35.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

