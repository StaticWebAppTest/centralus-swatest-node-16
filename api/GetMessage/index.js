module.exports = async function (context, req) {
  const date = "2023-03-07T00:57:57.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

