module.exports = async function (context, req) {
  const date = "2024-03-31T13:10:31.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

