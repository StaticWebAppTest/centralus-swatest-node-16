module.exports = async function (context, req) {
  const date = "2023-12-03T01:53:48.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

