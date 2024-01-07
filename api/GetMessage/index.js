module.exports = async function (context, req) {
  const date = "2024-01-07T09:08:28.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

