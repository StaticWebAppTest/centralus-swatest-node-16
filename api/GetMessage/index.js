module.exports = async function (context, req) {
  const date = "2024-11-24T18:14:32.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

