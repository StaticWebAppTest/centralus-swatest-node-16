module.exports = async function (context, req) {
  const date = "2024-08-29T02:06:20.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

