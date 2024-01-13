module.exports = async function (context, req) {
  const date = "2024-01-13T10:08:48.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

