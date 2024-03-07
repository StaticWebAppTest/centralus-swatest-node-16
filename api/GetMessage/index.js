module.exports = async function (context, req) {
  const date = "2024-03-07T22:08:35.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

