module.exports = async function (context, req) {
  const date = "2023-06-01T05:08:31.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

