module.exports = async function (context, req) {
  const date = "2024-03-15T11:07:24.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

