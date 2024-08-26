module.exports = async function (context, req) {
  const date = "2024-08-26T14:10:49.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

