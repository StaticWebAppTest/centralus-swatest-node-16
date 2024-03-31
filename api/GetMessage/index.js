module.exports = async function (context, req) {
  const date = "2024-03-31T14:07:17.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

