module.exports = async function (context, req) {
  const date = "2023-09-08T17:07:47.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

