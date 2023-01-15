module.exports = async function (context, req) {
  const date = "2023-01-15T11:07:26.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

