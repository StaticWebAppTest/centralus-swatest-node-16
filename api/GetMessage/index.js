module.exports = async function (context, req) {
  const date = "2024-05-24T12:17:49.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

