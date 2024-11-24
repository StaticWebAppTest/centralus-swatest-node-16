module.exports = async function (context, req) {
  const date = "2024-11-24T15:10:56.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

