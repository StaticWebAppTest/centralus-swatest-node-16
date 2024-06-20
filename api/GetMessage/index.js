module.exports = async function (context, req) {
  const date = "2024-06-20T02:26:50.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

