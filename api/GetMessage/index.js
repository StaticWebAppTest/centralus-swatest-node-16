module.exports = async function (context, req) {
  const date = "2024-08-30T00:53:18.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

