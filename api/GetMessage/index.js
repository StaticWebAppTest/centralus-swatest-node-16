module.exports = async function (context, req) {
  const date = "2024-06-05T14:10:36.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

