module.exports = async function (context, req) {
  const date = "2024-01-08T16:11:53.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

