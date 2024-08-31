module.exports = async function (context, req) {
  const date = "2024-08-31T18:13:13.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

