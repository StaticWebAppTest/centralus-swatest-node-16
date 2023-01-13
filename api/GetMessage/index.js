module.exports = async function (context, req) {
  const date = "2023-01-13T13:17:33.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

