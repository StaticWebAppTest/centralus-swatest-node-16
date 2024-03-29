module.exports = async function (context, req) {
  const date = "2024-03-29T21:08:13.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

