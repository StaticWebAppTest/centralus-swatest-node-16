module.exports = async function (context, req) {
  const date = "2024-04-06T16:11:16.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

