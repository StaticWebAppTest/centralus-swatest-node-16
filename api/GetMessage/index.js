module.exports = async function (context, req) {
  const date = "2024-01-01T14:08:30.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

