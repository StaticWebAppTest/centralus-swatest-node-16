module.exports = async function (context, req) {
  const date = "2024-06-22T21:09:43.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

