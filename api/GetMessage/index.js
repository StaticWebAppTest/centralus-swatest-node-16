module.exports = async function (context, req) {
  const date = "2023-03-05T12:17:29.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

