module.exports = async function (context, req) {
  const date = "2024-01-28T22:08:28.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

