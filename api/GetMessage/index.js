module.exports = async function (context, req) {
  const date = "2024-07-01T09:13:43.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

