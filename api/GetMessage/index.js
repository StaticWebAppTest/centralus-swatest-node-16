module.exports = async function (context, req) {
  const date = "2024-09-12T22:11:20.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

