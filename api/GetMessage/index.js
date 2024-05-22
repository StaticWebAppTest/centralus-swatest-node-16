module.exports = async function (context, req) {
  const date = "2024-05-22T02:24:22.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

