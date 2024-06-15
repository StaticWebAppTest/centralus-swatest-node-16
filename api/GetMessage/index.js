module.exports = async function (context, req) {
  const date = "2024-06-15T14:09:26.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

