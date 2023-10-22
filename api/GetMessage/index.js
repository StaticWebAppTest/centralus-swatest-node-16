module.exports = async function (context, req) {
  const date = "2023-10-22T17:08:05.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

