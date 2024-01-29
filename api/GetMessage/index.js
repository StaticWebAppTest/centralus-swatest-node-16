module.exports = async function (context, req) {
  const date = "2024-01-29T21:07:37.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

