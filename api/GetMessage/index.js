module.exports = async function (context, req) {
  const date = "2024-03-05T14:08:56.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

