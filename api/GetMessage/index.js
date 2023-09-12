module.exports = async function (context, req) {
  const date = "2023-09-12T12:16:29.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

