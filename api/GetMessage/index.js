module.exports = async function (context, req) {
  const date = "2024-12-06T13:22:37.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

