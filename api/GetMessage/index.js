module.exports = async function (context, req) {
  const date = "2024-12-18T16:14:58.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

