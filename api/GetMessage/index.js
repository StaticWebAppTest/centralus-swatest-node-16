module.exports = async function (context, req) {
  const date = "2024-05-29T02:28:36.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

