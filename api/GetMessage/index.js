module.exports = async function (context, req) {
  const date = "2024-02-23T05:09:35.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

