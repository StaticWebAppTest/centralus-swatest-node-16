module.exports = async function (context, req) {
  const date = "2023-03-05T03:23:16.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

