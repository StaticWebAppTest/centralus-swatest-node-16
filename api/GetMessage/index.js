module.exports = async function (context, req) {
  const date = "2023-07-27T21:06:20.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

