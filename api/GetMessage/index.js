module.exports = async function (context, req) {
  const date = "2024-05-31T19:08:52.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

