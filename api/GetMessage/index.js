module.exports = async function (context, req) {
  const date = "2024-08-30T10:12:03.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

