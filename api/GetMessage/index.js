module.exports = async function (context, req) {
  const date = "2024-03-08T17:08:34.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

