module.exports = async function (context, req) {
  const date = "2023-10-05T00:40:56.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

