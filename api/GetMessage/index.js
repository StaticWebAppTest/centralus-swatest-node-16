module.exports = async function (context, req) {
  const date = "2024-05-19T12:16:49.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

