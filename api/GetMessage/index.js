module.exports = async function (context, req) {
  const date = "2023-03-04T22:08:59.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

