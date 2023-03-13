module.exports = async function (context, req) {
  const date = "2023-03-13T00:51:58.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

