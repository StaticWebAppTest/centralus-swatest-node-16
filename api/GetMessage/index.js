module.exports = async function (context, req) {
  const date = "2024-04-07T10:08:43.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

