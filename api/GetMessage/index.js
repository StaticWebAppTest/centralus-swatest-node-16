module.exports = async function (context, req) {
  const date = "2023-03-21T22:07:26.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

