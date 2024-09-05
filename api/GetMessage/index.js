module.exports = async function (context, req) {
  const date = "2024-09-05T22:10:18.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

