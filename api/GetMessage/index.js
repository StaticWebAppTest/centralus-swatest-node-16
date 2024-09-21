module.exports = async function (context, req) {
  const date = "2024-09-21T02:08:34.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

