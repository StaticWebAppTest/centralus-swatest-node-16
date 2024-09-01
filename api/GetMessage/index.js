module.exports = async function (context, req) {
  const date = "2024-09-01T14:09:03.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

