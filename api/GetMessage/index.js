module.exports = async function (context, req) {
  const date = "2024-06-24T19:08:48.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

