module.exports = async function (context, req) {
  const date = "2024-03-22T23:08:17.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

