module.exports = async function (context, req) {
  const date = "2024-04-15T14:08:30.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

