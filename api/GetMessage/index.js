module.exports = async function (context, req) {
  const date = "2024-07-04T21:09:36.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

