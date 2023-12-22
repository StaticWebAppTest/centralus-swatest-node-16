module.exports = async function (context, req) {
  const date = "2023-12-22T21:07:56.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

