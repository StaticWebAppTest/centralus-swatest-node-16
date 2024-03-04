module.exports = async function (context, req) {
  const date = "2024-03-04T12:21:55.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

