module.exports = async function (context, req) {
  const date = "2024-03-22T14:09:16.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

