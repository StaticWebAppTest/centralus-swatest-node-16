module.exports = async function (context, req) {
  const date = "2023-11-26T12:15:24.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

