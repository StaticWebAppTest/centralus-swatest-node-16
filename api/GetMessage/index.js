module.exports = async function (context, req) {
  const date = "2023-09-22T10:09:36.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

