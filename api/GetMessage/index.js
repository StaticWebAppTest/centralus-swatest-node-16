module.exports = async function (context, req) {
  const date = "2024-08-26T16:14:32.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

