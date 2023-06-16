module.exports = async function (context, req) {
  const date = "2023-06-16T12:16:31.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

