module.exports = async function (context, req) {
  const date = "2023-10-26T10:09:14.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

