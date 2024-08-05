module.exports = async function (context, req) {
  const date = "2024-08-05T02:02:53.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

