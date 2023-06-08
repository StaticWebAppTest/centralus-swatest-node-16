module.exports = async function (context, req) {
  const date = "2023-06-08T10:09:34.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

