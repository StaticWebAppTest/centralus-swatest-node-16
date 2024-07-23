module.exports = async function (context, req) {
  const date = "2024-07-23T03:12:34.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

