module.exports = async function (context, req) {
  const date = "2024-12-31T21:10:15.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

