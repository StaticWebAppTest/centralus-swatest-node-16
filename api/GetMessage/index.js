module.exports = async function (context, req) {
  const date = "2024-06-29T20:09:57.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

