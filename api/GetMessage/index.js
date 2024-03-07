module.exports = async function (context, req) {
  const date = "2024-03-07T15:08:58.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

