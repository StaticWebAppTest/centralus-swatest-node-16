module.exports = async function (context, req) {
  const date = "2025-04-23T15:14:03.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

