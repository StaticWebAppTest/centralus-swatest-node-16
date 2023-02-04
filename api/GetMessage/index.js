module.exports = async function (context, req) {
  const date = "2023-02-04T00:50:14.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

