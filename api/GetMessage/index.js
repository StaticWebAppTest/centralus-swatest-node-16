module.exports = async function (context, req) {
  const date = "2024-07-12T16:12:58.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

