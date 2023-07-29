module.exports = async function (context, req) {
  const date = "2023-07-29T14:06:49.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

