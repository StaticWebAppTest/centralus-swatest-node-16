module.exports = async function (context, req) {
  const date = "2024-03-31T16:09:55.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

