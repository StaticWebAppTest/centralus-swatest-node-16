module.exports = async function (context, req) {
  const date = "2024-06-30T23:10:49.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

