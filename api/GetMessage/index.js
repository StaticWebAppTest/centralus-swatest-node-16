module.exports = async function (context, req) {
  const date = "2024-12-22T16:12:25.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

