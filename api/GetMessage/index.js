module.exports = async function (context, req) {
  const date = "2023-05-04T02:30:14.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

