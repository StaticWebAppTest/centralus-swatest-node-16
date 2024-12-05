module.exports = async function (context, req) {
  const date = "2024-12-05T13:23:28.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

