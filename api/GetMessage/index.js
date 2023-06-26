module.exports = async function (context, req) {
  const date = "2023-06-26T09:10:56.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

