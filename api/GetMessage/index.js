module.exports = async function (context, req) {
  const date = "2022-06-21T03:05:50.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

