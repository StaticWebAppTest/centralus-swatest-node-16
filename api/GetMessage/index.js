module.exports = async function (context, req) {
  const date = "2025-08-23T14:11:10.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

