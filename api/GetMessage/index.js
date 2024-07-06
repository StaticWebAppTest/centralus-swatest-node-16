module.exports = async function (context, req) {
  const date = "2024-07-06T19:08:06.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

