module.exports = async function (context, req) {
  const date = "2024-05-12T16:11:10.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

