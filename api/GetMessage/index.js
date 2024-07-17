module.exports = async function (context, req) {
  const date = "2024-07-17T00:50:14.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

