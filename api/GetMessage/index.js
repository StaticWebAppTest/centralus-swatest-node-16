module.exports = async function (context, req) {
  const date = "2024-08-24T15:10:22.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

