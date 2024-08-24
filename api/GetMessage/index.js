module.exports = async function (context, req) {
  const date = "2024-08-24T18:12:48.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

