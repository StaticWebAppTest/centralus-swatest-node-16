module.exports = async function (context, req) {
  const date = "2024-07-24T05:10:29.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

