module.exports = async function (context, req) {
  const date = "2024-06-30T21:10:15.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

