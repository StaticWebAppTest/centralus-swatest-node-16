module.exports = async function (context, req) {
  const date = "2025-08-30T18:16:03.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

