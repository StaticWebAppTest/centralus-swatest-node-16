module.exports = async function (context, req) {
  const date = "2024-03-29T23:08:25.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

